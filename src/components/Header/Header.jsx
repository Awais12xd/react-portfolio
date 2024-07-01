// import './index.css'
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="max-width navbar-row">
          <div className="logo">
            <Link to="#" className="Link">
              Portfo<span id="span-">lio.</span>
            </Link>
          </div>
          <ul className="menu ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) => `item 
              ${isActive ? "item-active" : ""} `}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menu-bar">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
