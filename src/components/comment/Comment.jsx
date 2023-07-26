import React, { useState } from "react";
import * as S from "./style";
import moment from "moment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { addComment, fetchComment, deleteComment, modifyComment } from "../../api/post";

const Comment = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [commentInput, setCommentInput] = useState("");

	// 댓글 작성 핸들러
	const handleCommentSubmit = async (e) => {
		e.preventDefault();
		// 댓글 작성 요청
		try {
			await addComment({ id, newComment: { content: commentInput } });
			// 댓글 작성이 성공적으로 완료되면 해당 쿼리를 재요청하여 업데이트
			queryClient.invalidateQueries(["comments", id]);

			// 댓글 작성 후 댓글 내용 초기화
			setCommentInput("");
		} catch (error) {
			console.error("댓글 작성 오류:", error);
			// 댓글 작성에 실패하면 오류 처리
			alert("댓글 작성에 실패했습니다.");
		}
	};

	return (
		<S.CommentWrapper>
			<S.CommentHeader>
				<h3>댓글</h3>
				<S.CommentSpan>
					총 <S.CommentSpan color="#16ae81">100</S.CommentSpan>개
				</S.CommentSpan>
			</S.CommentHeader>
			<S.CommentForm>
				<S.CommentInput
					type="text"
					placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
					value={commentInput}
					onChange={(e) => setCommentInput(e.target.value)}
				/>
				<S.CommentSubmit type="button" onClick={handleCommentSubmit}>
					작성
				</S.CommentSubmit>
			</S.CommentForm>
			<S.CommentList>
				<S.EachComment>
					<h4>
						닉네임 <S.CommentSpan>n시간 전</S.CommentSpan>
					</h4>
					<S.CommentContent>내용</S.CommentContent>
					<S.CommentBtn>수정</S.CommentBtn>
					<S.CommentBtn color="#e84057">삭제</S.CommentBtn>
				</S.EachComment>
			</S.CommentList>
		</S.CommentWrapper>
	);
};

export default Comment;
