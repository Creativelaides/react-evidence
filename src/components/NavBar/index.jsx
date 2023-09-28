import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

// Componente de NavLink personalizado
const CustomNavLink = ({ to, children, activeStyle }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    {children}
  </NavLink>
);

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeStyle: PropTypes.string.isRequired,
};

// Componente para generar elementos de lista de CustomNavLinks
const NavLinksList = ({ links, activeStyle }) => (
  <ul className="flex items-center gap-3">
    {links.map((link, index) => (
      <li key={index}>
        <CustomNavLink to={link.to} activeStyle={activeStyle}>
          {link.text}
        </CustomNavLink>
      </li>
    ))}
  </ul>
);

NavLinksList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeStyle: PropTypes.string.isRequired,
};

const NavBar = () => {
  const navLeft = [
    { to: "/", text: "All" },
    { to: "/clothes", text: "Clothes" },
    { to: "/electronics", text: "Electronics" },
    { to: "/toys", text: "Toys" },
    { to: "/others", text: "Others" },
  ];

  const navRight = [
    { to: "my-order", text: "My Order" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <CustomNavLink to="/">
          <li className="font-bold text-lg">Shop</li>
        </CustomNavLink>
        <NavLinksList links={navLeft} activeStyle={activeStyle} />
      </ul>
      <ul className="flex items-center gap-3">
        <li className="font-bold">email@example.com</li>
        <NavLinksList links={navRight} activeStyle={activeStyle} />
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default NavBar;
