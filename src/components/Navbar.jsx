import { useState } from 'react';
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
        <li><a href="/">Inicio</a></li>
        <li><a href="/palas">Palas</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
