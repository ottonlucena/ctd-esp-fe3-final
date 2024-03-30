import React from "react";
import { Link } from "react-router-dom";
import { useProductStates } from "./utils/global.context";
import "../index.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { toggleDarkMode, state } = useProductStates();
  return (
    <nav className={`${state.darkMode ? "dark" : "light"}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>
        <li>
          <Link to="/" className={`${state.darkMode ? "dark" : "light"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${state.darkMode ? "dark" : "light"}`}
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/favs" className={`${state.darkMode ? "dark" : "light"}`}>
            Favoritos
          </Link>
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => toggleDarkMode()}>Cambiar tema</button>
    </nav>
  );
};

export default Navbar;
