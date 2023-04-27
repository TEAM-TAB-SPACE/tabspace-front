import { atom } from 'recoil';

export interface User {
  id: number;
  realname: string;
}

export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    id: 0,
    realname: '',
  },
});

export const loginStateAtom = atom<boolean>({
  key: 'loginStateAtom',
  default: false,
});

export const isLoginFailedAtom = atom<boolean>({
  key: 'isLoginFailedAtom',
  default: false,
});
