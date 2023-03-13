import { atom } from 'recoil';

export const registerState = atom({
  key: 'registerState',
  default: {
    realname: '',
    email: '',
    phone: '',
    secretKey: '',
  },
});
