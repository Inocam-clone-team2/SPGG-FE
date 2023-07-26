import { styled } from "styled-components";

export const CommentWrapper = styled.section`
	box-sizing: border-box;
	width: 730px;
	height: 100%;
	background-color: white;
	border-radius: 4px;
	margin-top: 40px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;

export const CommentHeader = styled.section`
	display: flex;
	align-items: center;
	padding: 10px 30px;
	gap: 10px;
`;

export const CommentSpan = styled.span`
	font-size: 14px;
	color: ${(props) => props.color || "#7b858e"};
	font-weight: bold;
`;

export const CommentForm = styled.form`
	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	background-color: #f8f9fa;
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

export const CommentInput = styled.textarea`
	width: 560px;
	height: fit-content;
	min-height: 60px;
	text-align: center;
	overflow: scroll;
	padding: 8px;
	resize: vertical;
	font-size: 16px;
	border: 1px solid #dddfe4;

	&::placeholder {
		font-size: 13px;
	}
`;

export const CommentSubmit = styled.button`
	background-color: #16ae81;
	border-radius: 4px;
	border: 1px solid #46cfa7;
	display: block;
	padding: 11px 0 10px;
	line-height: 17px;
	font-size: 14px;
	height: 77px;
	width: 100px;
	color: white;
	font-size: 15px;
	font-weight: bold;
`;

export const CommentList = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 100px;
	background-color: white;
	margin-top: 30px;
`;

export const EachComment = styled.div`
	border-bottom: 1px solid #dddfe4;
	padding: 30px;
`;

export const CommentContent = styled.div`
	white-space: pre-line;
	word-break: break-word;
	width: 100%;
	height: fit-content;
	min-height: 40px;
`;

export const CommentBtn = styled.button`
	background: none;
	cursor: pointer;
	color: ${(props) => props.color || "#5383e8"};
	margin-right: 10px;
	border: none !important;
	font-weight: 700;
`;
