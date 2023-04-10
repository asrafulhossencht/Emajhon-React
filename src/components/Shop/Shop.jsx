import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { clearCart, getSavedData, saveData } from "../../utilities/sotreData";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const products = useLoaderData();
	const [addedProducts, setAddedProducts] = useState([]);
	let saveDataToAddedProducts = true;

	useEffect(() => {
		if (saveDataToAddedProducts) {
			saveDataToAddedProducts = false;
			setAddedProducts(getSavedData(products));
		}
	}, [products]);

	const addToCart = (product) => {
		const matchedProduct = addedProducts.find(
			(addedProduct) => addedProduct.id == product.id
		);
		if (matchedProduct) {
			const unMatchedProduct = addedProducts.filter(
				(addedProduct) => addedProduct.id != product.id
			);
			matchedProduct.quantity += 1;
			setAddedProducts([...unMatchedProduct, matchedProduct]);
		} else {
			product.quantity += 1;
			setAddedProducts([...addedProducts, product]);
		}
	};

	// store products on local storage
	addedProducts.length > 0 && saveData(addedProducts);

	return (
		<div className="shop">
			<div className="products">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						eventHandler={addToCart}
					></Product>
				))}
			</div>
			<div className="orders-container">
				<Order
					addedProducts={addedProducts}
					clearCartEvent={() => clearCart(setAddedProducts)}
				>
					<Link to="/order-review">
						<button className="child-cart-btn">
							Review Order <FontAwesomeIcon icon={faArrowRight} />
						</button>
					</Link>
				</Order>
			</div>
		</div>
	);
};

export default Shop;
