import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { clearCart, getSavedData, saveData } from "../../utilities/sotreData";
import Order from "../Order/Order";
import OrderProduct from "../OrderProduct/OrderProduct";
import "./OrderReview.css";

const OrderReview = () => {
	const products = useLoaderData();
	const [selectedProducts, setSelectedProducts] = useState(
		getSavedData(products)
	);

	const deleteProductEvent = (id) => {
		const newSelectedProducts = selectedProducts.filter(
			(selectedProduct) => selectedProduct.id != id
		);
		setSelectedProducts(newSelectedProducts);
	};
	selectedProducts && saveData(selectedProducts);

	return (
		<div className="order-review">
			<div className="selected-products-container">
				{selectedProducts.length > 0 ? selectedProducts.map((selectedProduct) => (
					<OrderProduct
						key={selectedProduct.id}
						selectedProduct={selectedProduct}
						deleteProductEvent={deleteProductEvent}
					/>
				)): <p className="empty-cart">Your Cart is empty</p>}
			</div>
			<div className="order-review-cart">
				<Order
					addedProducts={selectedProducts}
					clearCartEvent={() => clearCart(setSelectedProducts)}
				>
					<Link to="/checkout">
						<button className="child-cart-btn">
							Proceed Checkout{" "}
							<FontAwesomeIcon icon={faCreditCard} />
						</button>
					</Link>
				</Order>
			</div>
		</div>
	);
};

export default OrderReview;
