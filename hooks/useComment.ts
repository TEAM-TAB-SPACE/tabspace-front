import { API_URL_LECTURE } from '../pages/api/lecture';
import useFetch from './useFetch';

const useComment = (depth: 1 | 2) => {
  const fetch = useFetch();

  const url =
    depth === 1
      ? API_URL_LECTURE.COMMENTS_DEPTH1
      : API_URL_LECTURE.COMMENTS_DEPTH2;

  const addComment = (lectureRoomId: number, comment: string) => {
    fetch.post(url, { id: lectureRoomId, comment });
  };

  const editComment = (commentId: number, comment: string, reply: string) => {
    fetch.put(url, { id: commentId, comment, reply });
  };

  const deleteComment = (commentId: number) => {
    fetch.delete(url, { id: commentId });
  };

  return { addComment, editComment, deleteComment };
};

export default useComment;
