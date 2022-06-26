import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <div>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/review">Order Review</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/register">Register</NavLink>
          {
            user.email ?
              <button onClick={logOut}>Logout</button>
              :
              <NavLink to="/login">Login</NavLink>
          }
        </div>
        <div className="user-info">
          <p>{user.displayName}</p>
          {user.email && <img src={user.photoURL} alt="" />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
