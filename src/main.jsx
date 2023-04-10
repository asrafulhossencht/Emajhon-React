import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import "./index.css";
import cartLoaders from "./utilities/cartLoaders";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/order", element: <Shop />, loader: cartLoaders },
			{ path: "/order-review", element: <OrderReview />, loader: cartLoaders },
			{ path: "/inventory", element: <Inventory /> },
			{ path: "/login", element: <Login /> },
			{ path: "/checkout", element: <Checkout /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
