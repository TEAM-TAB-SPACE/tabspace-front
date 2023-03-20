export const Comments = () => {
  let comments = commentsData;

  const getComments = () => comments;

  return {
    getComments,
  };
};

const commentsData = [
  {
    id: 1,
    user: {
      realname: '박찬양',
    },
    comment: '하하',
    replies: [
      {
        id: 1,
        user: {
          realname: '박찬양',
        },
        comment: '흐흐',
      },
      {
        id: 3,
        user: {
          realname: '박찬양',
        },
        comment: 'ㅇㄹㄴㄹㅇㄹ',
      },
    ],
  },
  {
    id: 2,
    user: {
      realname: '박찬양',
    },
    comment: '허허',
    replies: [
      {
        id: 2,
        user: {
          realname: '박찬양',
        },
        comment: '호호',
      },
    ],
  },
  {
    id: 4,
    user: {
      realname: '박찬양',
    },
    comment: '질문없습니다!',
    replies: [],
  },
];
