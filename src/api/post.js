import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	// timeout: 2000,
});

instance.interceptors.request.use(
	// 요청을 보내기 전 수행되는 함수
	//매개변수 이름은 config가 아니라도 됨
	function (config) {
		console.log("인터셉터 요청 성공!");
		let accesstoken = localStorage.getItem("authorization");
		config.headers.Authorization = accesstoken;
		return config;
	},
	//오류 요청을 보내기 전 수행되는 함수
	function (error) {
		console.log("인터셉터 요청 오류!");
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	// 응답을 보내기 전 수행되는 함수
	function (response) {
		console.log("인터셉터 응답 받았습니다!");
		return response;
	},
	//오류응답을 보내기 전 수행되는 함수
	function (error) {
		console.log("인터셉터 응답 오류 발생");
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
export const fetchComment = async (postId) => {
	const response = await instance.get(`/api/post/${id}/comment`);
	return response.data;
};

// 댓글 삭제
export const deleteComment = async (payload) => {
	const postId = payload["postId"]; // 게시물 ID
	const commentId = payload["commentId"]; // 댓글 ID
	const response = await instance.delete(`/api/post/${postId}/comment/${commentId}`);
	return response.data;
};

// 댓글 수정
export const modifyComment = async (payload) => {
	const postId = payload["postId"];
	const commentId = payload["commentId"];
	const editComment = payload["editComment"];
	const response = await instance.put(`/api/post/${postId}/comment/${commentId}`, editComment, {
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};
