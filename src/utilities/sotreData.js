const saveData = (id, quantity) => {
	const saveAllData = JSON.parse(localStorage.getItem("emajohnProducts"));
	if (!saveAllData) {
		localStorage.setItem("emajohnProducts", JSON.stringify({}));
	} else {
		saveAllData[id] = quantity;
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

export { saveData, getSavedData };
