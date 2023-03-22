import { atom, selectorFamily } from 'recoil';
import { RefetchKey } from '../hooks/useFetch';

export interface CommentSingleData {
  id: number;
  user: {
    realname: string;
  };
  comment: string;
  replies?: CommentSingleData[];
}

export const commentRefetchKeyAtom = atom<RefetchKey>({
  key: 'commentRefetchKeyAtom',
  default: 'stale',
});

export const currentLectureCommentsAtom = atom<CommentSingleData[]>({
  key: 'currentLectureCommentsAtom',
  default: Array<CommentSingleData>(),
});

export const currentCommentSelector = selectorFamily<
  CommentSingleData,
  { depth: 1 | 2; commentId: number }
>({
  key: 'currentCommentsSelector',
  get:
    params =>
    ({ get }) => {
      const comments = get(currentLectureCommentsAtom);
      const isCurrentComment = (id: number) => id === params.commentId;

      const currentComment = comments.reduce(
        (currentComment: any, comment: CommentSingleData) => {
          if (params.depth === 2) {
            return (
              comment.replies?.filter(({ id }) => isCurrentComment(id))[0] ||
              currentComment
            );
          }

          if (isCurrentComment(comment.id)) {
            return comment;
          }

          return currentComment;
        },
        {},
      );

      return currentComment;
    },
});
