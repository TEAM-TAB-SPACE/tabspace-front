import { atom } from 'recoil';
import { localStorageEffect } from '../utils/localStorage';
// import { recoilPersist } from 'recoil-persist';

// // 디폴트로 localStorage에 저장
// // key : recoil-persist
// // const { persistAtom } = recoilPersist();

// // sessionStorage에 저장하려면(next.js 기준)
// const sessionStorage =
//   typeof window !== 'undefined' ? window.sessionStorage : undefined;

// // 새로고침 시 초기화 되는 것 방지
// export const { persistAtom } = recoilPersist({
//   key: 'userInfoSession',
//   storage: sessionStorage,
// });

// // accessToken
// export const accessTokenState = atom({
//   key: 'accessTokenState',
//   default: null,
//   effects_UNSTABLE: [persistAtom],
// });

// // realname
// export const realnameState = atom({
//   key: 'realnameState',
//   default: '',
//   effects_UNSTABLE: [persistAtom],
// });

// // accessToken
// export const accessTokenState = atom({
//   key: 'accessTokenState',
//   default: null,
//   effects_UNSTABLE: [localStorageEffect('user_list')],
// });

// export const realnameState = atom({
//   key: 'realnameState',
//   default: '',
//   effects_UNSTABLE: [localStorageEffect('user_list')],
// });

// export const userStoredList = atom({
//   key: 'userStoredList',
//   default: [],
//   effects: [localStorageEffect('user_list')],
// });
