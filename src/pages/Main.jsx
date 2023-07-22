import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<div>
			<Link to="/Community">Community</Link>
			<Link to="/Edit">Edit</Link>
			<Link to="/History">History</Link>
			<Link to="/Detail">Detail</Link>
			<Link to="/Login">Login</Link>
			<Link to="/PostForm">PostForm</Link>
			<Link to="/Ranking">Ranking</Link>
			<Link to="/Signup">Signup</Link>
		</div>
	);
};

export default Main;
