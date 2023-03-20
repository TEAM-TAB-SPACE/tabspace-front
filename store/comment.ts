import { atom } from 'recoil';
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
