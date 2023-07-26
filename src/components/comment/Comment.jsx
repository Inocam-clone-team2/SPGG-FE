import React from "react";
import * as S from "./style";
import moment from "moment";

const Comment = () => {
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
				/>
				<S.CommentSubmit type="submit">작성</S.CommentSubmit>
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
