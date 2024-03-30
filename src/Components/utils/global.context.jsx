import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserId, getUsers } from "../../api/product";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs"));

export const initialState = { theme: false, data: [], favs: lsFavs || [] };

//Tendremos por parámetros nuestro estado y acción
const productsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkMode: !state.theme };
    case "SET_USERS":
      return { ...state, data: action.payload };
    case "USER_BY_ID":
      return { ...state, user: action.payload };
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVORITE":
      let newArr = state.favs.filter((user) => user.id !== action.payload);
      return { ...state, favs: newArr };
    case "REMOVE_FAVORITE_ALL":
      return { ...state, favs: [] };
    default:
      return state;
  }
};

//función para seleccionar el type y agregar el payload
const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

const setUserById = (userId) => ({
  type: "USER_BY_ID",
  payload: userId,
});

const setFavs = (user) => ({
  type: "ADD_FAVORITES",
  payload: user,
});

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    //llamar el dato de los usuarios
    const fetchUsers = async () => {
      let users = await getUsers();
      dispatch(setUsers(users));
    };
    fetchUsers();
  }, []);

  const fetchUserById = async (userId) => {
    try {
      let user = await getUserId(userId);
      dispatch(setUserById(user));
    } catch (err) {
      console.log("Esto es un error: ", err);
    }
  };

  const fetchUser = (doc) => {
    const isUserFavs = state.favs.some((fav) => fav.id === doc.id);
    if (!isUserFavs) {
      dispatch(setFavs(doc));
    } else {
      console.log("El usuario ya esta en favoritos");
    }
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  const removeFavoriteAll = () => {
    localStorage.removeItem("favs");
    dispatch({ type: "REMOVE_FAVORITE_ALL" });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };

  let data = {
    state,
    dispatch,
    fetchUserById,
    fetchUser,
    removeFavorite,
    removeFavoriteAll,
    toggleDarkMode,
  };
  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export const useProductStates = () => useContext(ContextGlobal);
