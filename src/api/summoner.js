import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const getSummonerData = async (summonerName) => {
	try {
		const response = await axios.get(`${BASE_URL}/api/search/test`, {
			params: {
				summonerName: summonerName,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
