import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div>
				<NavLink to="/order">Order</NavLink>
				<NavLink to="/order-review">Order Review</NavLink>
				<NavLink to="/inventory">Manage Inventory</NavLink>
				<NavLink to="/login">Login</NavLink>
			</div>
		</nav>
	);
};

export default Header;
