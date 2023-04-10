import React from "react";
import "./Home.css";
import bannerImage from "../../images/bannerImage.png"

const Home = () => {
	return (
		<div className="banner">
			<div>
				<p className="discount-offer">Sale up to 70% off</p>
				<h2 className="banner-title">New Collection For Fall</h2>
				<p className="banner-subtitle">
					Discover all the new arrivals of ready-to-wear collection.
				</p>
				<button className="shop-btn">Shop Now</button>
			</div>
			<div className="banner-image-container">
				<img src={bannerImage} alt="" />
                <div className="banner-image-shadow"></div>
			</div>
		</div>
	);
};

export default Home;
