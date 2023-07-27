import React, { useState } from "react";
import * as S from "./style";
import moment from "moment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import {
  addComment,
  fetchComment,
  deleteComment,
  modifyComment,
} from "../../api/post";

const Comment = ({ commentList }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [commentInput, setCommentInput] = useState("");
  const navigate = useNavigate();

  /// 댓글 작성 통신
  const mutation = useMutation((newComment) => addComment({ id, newComment }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", id]);
      setCommentInput("");
    },
    onError: () => {
      alert("댓글 작성에 실패했습니다.");
    },
  });

  // 댓글 작성 핸들러
  const onClickPostWriteButton = () => {
    if (localStorage.getItem("authorization") === null) {
      alert("로그인 되지 않은 사용자입니다.");
      navigate("/login");
    } else {
      handleCommentSubmit();
      console.log("로그인 중입니다");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!isUserLoggedIn) {
      alert("로그인이 필요합니다. 로그인 후에 댓글을 작성해주세요.");
      return;
    }

    if (!commentInput) {
      alert("내용을 입력해주세요.");
      return;
    }

    // 댓글 작성 요청
    mutation.mutate({ content: commentInput });
  };

  // // 댓글 작성 핸들러
  // const handleCommentSubmit = async (e) => {
  // 	e.preventDefault();

  // 	if (!commentInput) {
  // 		alert("댓글 내용을 입력해주세요.");
  // 		return;
  // 	}
  // 	// 댓글 작성 요청
  // 	try {
  // 		await addComment({ id, newComment: { content: commentInput } });
  // 		// 댓글 작성이 성공적으로 완료되면 해당 쿼리를 재요청하여 업데이트
  // 		queryClient.invalidateQueries(["comments", id]);

  // 		// 댓글 작성 후 댓글 내용 초기화
  // 		setCommentInput("");
  // 	} catch (error) {
  // 		alert("댓글 작성에 실패했습니다.");
  // 	}
  // };
  // 댓글 조회 GET api/post/31/comment 403
  const { data: test } = useQuery(["comments", id], fetchComment, {
    staleTime: 300000,
  });
  // console.log("data", test);

  // 댓글 삭제 핸들러
  const handleCommentDelete = async (commentId) => {
    // 댓글 삭제 요청
    try {
      await deleteComment({ id, commentId: commentId });
      // 댓글 삭제가 성공적으로 완료되면 해당 쿼리를 재요청하여 업데이트
      queryClient.invalidateQueries(["comments", postId]);
    } catch (error) {
      alert("잠시 후 다시 시도해주세요.");
    }
  };

  //댓글 수
  const commentCount = commentList?.length ?? 0;
  console.log(commentList);
  return (
    <S.CommentWrapper>
      <S.CommentHeader>
        <h3>댓글</h3>
        <S.CommentSpan>
          총 <S.CommentSpan color="#16ae81">{commentCount}</S.CommentSpan>개
        </S.CommentSpan>
      </S.CommentHeader>
      <S.CommentForm>
        <S.CommentInput
          type="text"
          placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <S.CommentSubmit type="button" onClick={onClickPostWriteButton}>
          작성
        </S.CommentSubmit>
      </S.CommentForm>
      <S.CommentList>
        {commentCount === 0 ? (
          <S.EmptyComment>
            <S.CommentSpan>등록된 댓글이 없습니다.</S.CommentSpan>
          </S.EmptyComment>
        ) : (
          <>
            {commentList.map((comment) => (
              <S.EachComment key={comment.id}>
                <h4>
                  {comment.nickname}{" "}
                  <S.CommentSpan>
                    {moment(comment.createdAt).fromNow()}
                  </S.CommentSpan>
                </h4>
                <S.CommentContent>{comment.content}</S.CommentContent>
                {/* <S.CommentBtn>수정</S.CommentBtn> */}
                <S.CommentBtn
                  onClick={() => handleCommentDelete(comment.id)}
                  color="#e84057"
                >
                  삭제
                </S.CommentBtn>
              </S.EachComment>
            ))}
          </>
        )}
      </S.CommentList>
    </S.CommentWrapper>
  );
};

export default Comment;
