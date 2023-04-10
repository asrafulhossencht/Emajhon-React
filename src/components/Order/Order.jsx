import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "./Order.css";

const Order = ({ addedProducts, children, clearCartEvent }) => {
	let selectedItems = 0,
		totalProductsPrice = 0,
		totalShippingCharge = 0;

	addedProducts.forEach((addedProduct) => {
		selectedItems += addedProduct.quantity;
		totalProductsPrice += addedProduct.price * addedProduct.quantity;
		totalShippingCharge += addedProduct.shipping;
	});

	return (
		<div className="order-carts-container">
			<h2>Order Summary</h2>
			<div className="order-carts">
				<p>Selected Items: {selectedItems}</p>
				<p>Total Price: ${totalProductsPrice}</p>
				<p>Total Shipping Charge: ${totalShippingCharge}</p>
				<p>Tax: ${totalProductsPrice / 10}</p>
				<p className="total-price">
					Grand Total: $
					{totalProductsPrice + totalProductsPrice / 10 + 5}
				</p>
			</div>
			<button className="order-clear-cart-btn" onClick={clearCartEvent}>
				Clear Cart <FontAwesomeIcon icon={faTrash} />
			</button>
			{children}
		</div>
	);
};

export default Order;
