import { atom, selectorFamily } from 'recoil';
import { RefetchKey } from '../hooks/useFetch';

export interface CommentSingleData {
  id: number;
  user: {
    realname: string;
  };
  comment: string;
  replies: CommentSingleData[];
}

export const commentRefetchKeyAtom = atom<RefetchKey>({
  key: 'commentRefetchKeyAtom',
  default: 'stale',
});

export const currentLectureCommentsAtom = atom<CommentSingleData[]>({
  key: 'currentLectureCommentsAtom',
  default: Array<CommentSingleData>(),
});

export const currentCommentsSelector = selectorFamily<
  CommentSingleData,
  number
>({
  key: 'currentCommentsSelector',
  get:
    commentId =>
    ({ get }) => {
      const comments = get(currentLectureCommentsAtom);

      return comments.filter(comment => comment.id === commentId)[0];
    },
});
