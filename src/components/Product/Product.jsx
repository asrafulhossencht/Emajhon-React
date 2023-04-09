import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, eventHandler }) => {
	const { img, name, price, seller, ratings } = product;
	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
				<div className="product-details">
					<h3>{name}</h3>
					<p>Price: ${price}</p>
					<p style={{ marginTop: "2rem" }}>Manufacturer: {seller}</p>
					<p>Ratings: {ratings} star</p>
				</div>
			</div>
			<button
				className="add-to-cart-btn"
				onClick={() => eventHandler(product)}
			>
				Add to cart
				<FontAwesomeIcon icon={faShoppingCart} />
			</button>
		</div>
	);
};

export default Product;
