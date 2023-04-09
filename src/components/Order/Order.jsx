import React from "react";
import "./Order.css";

const Order = ({ addedProducts }) => {
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
		</div>
	);
};

export default Order;
