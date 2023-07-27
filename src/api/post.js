import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	// timeout: 2000,
});

instance.interceptors.request.use(
	// 요청을 보내기 전 수행되는 함수
	//매개변수 이름은 config가 아니라도 됨
	function (config) {
		let accesstoken = localStorage.getItem("authorization");
		config.headers.Authorization = accesstoken;
		return config;
	},
	//오류 요청을 보내기 전 수행되는 함수
	function (error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	// 응답을 보내기 전 수행되는 함수
	function (response) {
		return response;
	},
	//오류응답을 보내기 전 수행되는 함수
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;

// 댓글 등록
export const addComment = async (payload) => {
	const postId = payload["id"];
	const newComment = payload["newComment"];
	const response = await instance.post(
		`/api/post/${postId}/comment`,
		JSON.stringify(newComment),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
	return response.data;
};

// 댓글 조회
export const fetchComment = async (payload) => {
	const postId = payload.queryKey[1];
	const response = await instance.get(`/api/post/${postId}/comment`);
	return response.data;
};

// 댓글 삭제
export const deleteComment = async (payload) => {
	try {
		const postId = payload["id"]; // 게시물 ID
		const commentId = payload["commentId"]; // 댓글 ID
		const response = await instance.delete(`/api/post/${postId}/comment/${commentId}`);
		return response.data;
	} catch (error) {
		if (error.response) {
			// 서버 응답에 오류가 포함된 경우
			console.error("댓글 삭제 오류:", error.response.data);
			throw new Error("댓글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.");
		} else if (error.request) {
			// 요청을 보낸 후 응답을 받지 못한 경우 (네트워크 오류 등)
			console.error("댓글 삭제 요청 오류:", error.request);
			throw new Error("서버와의 연결이 끊어졌습니다. 잠시 후 다시 시도해주세요.");
		} else {
			// 기타 다른 오류가 발생한 경우
			console.error("댓글 삭제 오류:", error.message);
			throw new Error("댓글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.");
		}
	}
};
