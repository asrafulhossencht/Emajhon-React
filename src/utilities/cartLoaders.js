const cartLoaders = async () => {
	const LoadCart = await fetch("../../public/products.json");
	const products = await LoadCart.json();
	return products;
};

export default cartLoaders;
