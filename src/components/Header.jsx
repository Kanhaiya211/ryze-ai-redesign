import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Ryze AI</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>

        <button className="nav-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
