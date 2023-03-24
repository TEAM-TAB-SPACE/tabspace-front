import { atom } from 'recoil';

export const loginStateAtom = atom<boolean>({
  key: 'loginStateAtom',
  default: false,
});
