import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/*
    Navigation links created with <Link> and <NavLink> do not result in a page refresh;
    only those certain sections of the page that are defined using the <Route>
    and that match the URL path are updated.
*/
const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {/* children are the elements inside the component <Component>children</Component> */}
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">
      <span
        role="img"
        aria-label="emoji"
      >
        🦎
      </span>
      The Chameleons page
    </h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
