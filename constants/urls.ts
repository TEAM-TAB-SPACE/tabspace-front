export const INTERNAL = {
  home: '/',
  login: '/login',
  register: '/register',
  lecture: '/lecture',
  evaluation: '/lecture/evaluation',
  dashboard: '/dashboard',
};

export const EXTERNAL = {
  KAKAO_AUTH: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`,
};
