import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getSavedData, saveData } from "../../utilities/sotreData";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [addedProducts, setAddedProducts] = useState([]);
	let saveDataToAddedProducts = true;

	useEffect(() => {
		const loadProducts = async () => {
			const res = await fetch("../../../products.json");
			const loadedProducts = await res.json();
			setProducts(loadedProducts);
		};
		loadProducts();
	}, []);

	useEffect(() => {
		console.log(saveDataToAddedProducts);
		if (saveDataToAddedProducts) {
			saveDataToAddedProducts = false;
			setAddedProducts(getSavedData(products));
		}
	}, [products]);
	console.log(addedProducts, "hi");

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

	addedProducts &&
		addedProducts.forEach((addedProduct) =>
			saveData(addedProduct.id, addedProduct.quantity)
		);

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
			<Order addedProducts={addedProducts}></Order>
		</div>
	);
};

export default Shop;
