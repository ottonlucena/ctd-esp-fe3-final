import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useProductStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useProductStates();

  const users = state.data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
  }));

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
