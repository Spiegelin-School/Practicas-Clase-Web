import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Importa el CSS específico para Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/add-ticket" className="nav-link">Ticket</NavLink>

      </div>
    </nav>
  );
}

export default Navbar;