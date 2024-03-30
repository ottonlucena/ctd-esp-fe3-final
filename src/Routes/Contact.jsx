import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Deseas que te contactemos?</h2>
      <p>Ingresa tus datos en nuestro formulario:</p>
      <Form />
    </div>
  );
};

export default Contact;
