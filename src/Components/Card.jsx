import React from "react";
import imagenDoctor from "../images/doctor.jpg";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  let { name, username, id } = user;
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log(id);
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src={imagenDoctor} alt="img" style={{ width: "50%" }} />
      <h3>{name}</h3>
      <p>{username}</p>
      <button>
        <Link to={`/dentist/${id}`}>Ver detalle</Link>
      </button>
      <button onClick={addFav} className="favButton">
        Agregar favoritos⭐
      </button>
    </div>
  );
};

export default Card;
