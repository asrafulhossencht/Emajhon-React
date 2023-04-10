import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OrderProduct.css";

const OrderProduct = (props) => {
	const { id, img, name, price, shipping, quantity } = props.selectedProduct;

	return (
		<div className="order-product-container">
			<div className="order-product">
				<img
					className="order-product-image"
					src={img}
					alt="selected product image"
				/>
				<div>
					<h3 className="order-product-title">{name}</h3>
					<p className="order-product-price">Price: <span>${price}</span></p>
					<p className="order-product-shipping-charge">
						Shipping Charge: <span>${shipping}</span>
					</p>
					<p className="order-product-quantity">
						Quantity: <span>{quantity}</span>
					</p>
				</div>
			</div>
			<button onClick={() => props.deleteProductEvent(id)}>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</div>
	);
};

export default OrderProduct;
