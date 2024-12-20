import CartWidget from "./CartWidget";
import "./navbar.scss";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/src/img/download.png" alt="logo" />
      </div>

      <ul>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/category/rostro"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Rostro
        </NavLink>
        <NavLink
          to="/category/cuerpo"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Cuerpo
        </NavLink>
        <NavLink
          to="/category/accesorios"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Accesorios
        </NavLink>
        <NavLink
          to="/category/contacto"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Contacto
        </NavLink>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
