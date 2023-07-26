import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getSummonerData = async (summonerName) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/search/test`, {
			params: {
				summonerName: summonerName,
			},
		});
		return response.data;
	} catch (error) {
		console.log("주소", BASE_URL);
		console.error(error);
	}
};
