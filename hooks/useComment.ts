import { API_URL_LECTURE } from '../pages/api/lecture';
import useFetch from './useFetch';

const useComment = () => {
  const fetch = useFetch();

  const editComment = (lectureRoomId: number, comment: string) => {
    fetch.post(API_URL_LECTURE.COMMENTS_DEPTH1, { id: lectureRoomId, comment });
  };

  const deleteComment = (commentId: number) => {
    fetch.delete(API_URL_LECTURE.COMMENTS_DEPTH1, { id: commentId });
  };

  return { editComment, deleteComment };
};

export default useComment;
