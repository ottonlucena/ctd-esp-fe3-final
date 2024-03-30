import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !email) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (nombre.length <= 5) {
      setError("El nombre debe tener al menos 5 caracteres.");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Por favor ingrese un correo electrónico válido.");
      return;
    }
    setError("");
    console.log("Datos enviados: ", {
      nombre,
      apellido,
      email,
    });

    setEnviado(true);

    setNombre("");
    setApellido("");
    setEmail("");
  };

  return (
    <div>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="apellid">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
          {error && <p>{error}</p>}
        </form>
      ) : (
        <div>
          <p>
            Gracias {nombre} {apellido}, te contactemos lo antes posible vía
            email.
          </p>
          <button>
            <Link to="/">Inicio</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
