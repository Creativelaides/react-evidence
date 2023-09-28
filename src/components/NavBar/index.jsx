import { PropTypes } from 'prop-types';
import { NavLink } from "react-router-dom";

// Componente de NavLink personalizado
const _NavLink = ({ to, children, activeStyle }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    {children}
  </NavLink>
);

_NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeStyle: PropTypes.string.isRequired
};

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="font-bold text-lg">
            <_NavLink to="/" >
              Shop
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/" activeStyle={activeStyle}>
              All
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/clothes" activeStyle={activeStyle}>
              Clothes
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/electronics" activeStyle={activeStyle}>
              Electronics
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/toys" activeStyle={activeStyle}>
              Toys
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/others" activeStyle={activeStyle}>
              Others
            </_NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="font-bold">email@example.com</li>
          <li>
            <_NavLink to="/my-order" activeStyle={activeStyle}>
              My Order
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/" activeStyle={activeStyle}>
              My Account
            </_NavLink>
          </li>
          <li>
            <_NavLink to="/sign-in" activeStyle={activeStyle}>
              Sign In
            </_NavLink>
          </li>
          <li>
            🛒 0
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
