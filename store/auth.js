import { atom } from 'recoil';

export const userStateAtom = atom({
  key: 'user',
  default: { access: '', id: '', realname: '' },
});
