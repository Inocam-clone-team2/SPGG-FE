import axios from "axios";
// const BASE_URL = process.env.REACT_APP_API_URL;
// const BASE_URL = "http://localhost:4000";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// export const getSummoner = async () => {
// 	try {
// 		const response = await axios.get(`${BASE_URL}/api/summoner`);
// 		return response.json;
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

export const getSummoners = async () => {
	return instance
		.get("/api/summoner")
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
};
