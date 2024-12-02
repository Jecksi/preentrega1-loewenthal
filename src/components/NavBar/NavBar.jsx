import CartWidget from "./CartWidget";
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/src/img/download.png" alt="logo" />
      </div>

      <ul>
        <li>Inicio</li>
        <li>Rostro</li>
        <li>Cuerpo</li>
        <li>Accesorios</li>
        <li>Contacto</li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
