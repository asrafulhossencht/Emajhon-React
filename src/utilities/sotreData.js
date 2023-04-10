const saveData = (products) => {
	const getAllSavedData = localStorage.getItem("emajohnProducts");
	console.log(products.length);
	console.log(getAllSavedData);
	if (!getAllSavedData) {
		localStorage.setItem("emajohnProducts", JSON.stringify({}));
	} else {
		const saveAllData = {};
		products.forEach((product) => {
			saveAllData[product.id] = product.quantity;
		});
		console.log(saveAllData);
		localStorage.setItem("emajohnProducts", JSON.stringify(saveAllData));
	}
};

const getSavedData = (allProducts) => {
	const allSavedData = JSON.parse(localStorage.getItem("emajohnProducts"));
	if (!allSavedData) {
		return [];
	}

	const allSavedProducts = allProducts.filter((product, index) => {
		for (const [id, quantity] of Object.entries(allSavedData)) {
			if (product.id == id) {
				product.quantity = quantity;
				return product;
			}
		}
	});
	return allSavedProducts;
};

const clearCart = (setProductsFunc) => {
	setProductsFunc([]);
	localStorage.removeItem("emajohnProducts");
};

export { saveData, getSavedData, clearCart };
