import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserId, getUsers } from "../../api/product";

export const ContextGlobal = createContext();

export const initialState = { theme: false, data: [] };

//Tendremos por parámetros nuestro estado y acción
const productsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      break;
    case "SET_USERS":
      return { ...state, data: action.payload };
    case "USER_BY_ID":
      return { ...state, user: action.payload };
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

  let data = { state, dispatch, fetchUserById };
  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export const useProductStates = () => useContext(ContextGlobal);
