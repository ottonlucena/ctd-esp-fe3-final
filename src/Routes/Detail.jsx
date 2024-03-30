import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStates } from "../Components/utils/global.context";
import imagenDoctor from "../images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const { state, fetchUserById } = useProductStates();
  const { user } = state;

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchUserById(id);
      } catch (error) {
        console.log("Esto es un error: ", error);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {user ? (
        <div>
          <img src={imagenDoctor} alt="" style={{ width: "50%" }} />
          <h2>{user.name}</h2>
          <p>Correo electrónico: {user.email}</p>
          <p>telefono: {user.phone}</p>
          <p>website: {user.website}</p>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </>
  );
};

export default Detail;
