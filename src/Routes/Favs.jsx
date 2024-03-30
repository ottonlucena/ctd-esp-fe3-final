import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useProductStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, removeFavorite, removeFavoriteAll } = useProductStates();

  const users = state.favs.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
  }));

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id}>
              <Card user={user} />
              <button onClick={() => removeFavorite(user.id)}>
                Eliminar favorito
              </button>
              <button onClick={() => removeFavoriteAll()}>
                Eliminar todos
              </button>
            </div>
          ))
        ) : (
          <p>No hay favoritos agregados</p>
        )}
      </div>
    </>
  );
};

export default Favs;
