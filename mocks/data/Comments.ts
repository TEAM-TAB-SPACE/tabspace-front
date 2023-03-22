export const Comments = () => {
  let comments = commentsData;

  const getComments = () => comments;

  const addComment = (comment: string) => {
    comments = [
      ...comments,
      {
        id: Math.random() * 100,
        user: {
          realname: '박찬양',
        },
        comment: comment,
        replies: [],
      },
    ];
  };

  const deleteComment = (id: number) => {
    comments = comments.filter(comment => comment.id !== id);
  };

  return {
    getComments,
    addComment,
    deleteComment,
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
