import "../css/NavBar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to= "/">Movies App</Link>
      </div>
      <div className="navbar-linkes">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>

  );
}

export default NavBar