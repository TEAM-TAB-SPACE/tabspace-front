import axios from 'axios';

const KAKAO_URL = 'http://localhost:8000/api/auth/callback/kakao';

export const axiosInstance = axios.create({
  baseURL: KAKAO_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // 요청 인터셉터
// instance.interceptors.request.use(
//   function (config) {
//     // 요청 성공 직전 호출됨, axios 설정값을 넣는다
//     // 요청마다 자체적으로 로컬스토리지에 access token을 확인한다
//     config.headers['Content-Type'] = 'application/json; charset=utf-8';
//     config.headers['X-Requested-With'] = 'XMLHttpRequest';
//     config.headers['Accept'] = '*/*';

//     const accessToken = localStorage.getItem('accessToken');
//     if (!accessToken) return config;

//     config.headers.Authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

// // 응답 인터셉터
// instance.interceptors.response.use(
//   function (response) {
//     // http status 200일 경우 응답 성공 직전 호출, .then()으로 이어짐
//     return response;
//   },
//   function (error) {
//     // http status 200이 아닌 경우 응답 에러 직전 호출, .catch()으로 이어짐
//     return Promise.reject(error);
//   },
// );
