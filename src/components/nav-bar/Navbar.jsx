import { NavLink } from 'react-router-dom';
import { Search } from '../search/Search';

// const setActive = ({ isActive }) => isActive ? 'active-link' : '';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="links">
                <NavLink to="/">football</NavLink>
                <NavLink to="/competitions">Leagues</NavLink>
                <NavLink to="/teams">Teams</NavLink>
                
            </div>
            
        </nav>
    );
}

export default Navbar;