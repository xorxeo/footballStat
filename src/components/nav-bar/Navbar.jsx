import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <div className="links__item">
          <NavLink to="/">football</NavLink>
        </div>
        <div className="links__item">
          <NavLink to="/competitions">
            Leagues
          </NavLink>
        </div>
        <div className="links__item">
          <NavLink to="/teams">
            Teams
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
