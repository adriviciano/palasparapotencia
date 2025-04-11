import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <div className="logo">PalasPro</div>
      <button className="toggle" onClick={() => setActive(!active)}>
        ☰
      </button>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/palas">Palas</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
