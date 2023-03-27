export const Comments = () => {
  let comments = commentsData;

  const getComments = () => comments;

  const addComment = (comment: string) => {
    comments = [
      ...comments,
      {
        id: Math.random() * 100,
        user: {
          id: 9,
          realname: '박찬양',
        },
        comment: comment,
        replies: [],
      },
    ];
  };

  const editComment = (id: number, text: string) => {
    comments = comments.map(comment => {
      if (comment.id === id) return { ...comment, comment: text };
      return comment;
    });
  };

  const deleteComment = (id: number) => {
    comments = comments.filter(comment => comment.id !== id);
  };

  return {
    getComments,
    addComment,
    editComment,
    deleteComment,
  };
};

const commentsData = [
  {
    id: 1,
    user: {
      id: 9,
      realname: '박찬양',
    },
    comment: '하하',
    replies: [
      {
        id: 1,
        user: {
          id: 9,
          realname: '박찬양',
        },
        comment: '흐흐',
      },
      {
        id: 3,
        user: {
          id: 14,
          realname: '문예림',
        },
        comment: 'ㅇㄹㄴㄹㅇㄹ',
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 9,
      realname: '박찬양',
    },
    comment: '허허',
    replies: [
      {
        id: 2,
        user: {
          id: 14,
          realname: '문예림',
        },
        comment: '호호',
      },
    ],
  },
  {
    id: 4,
    user: {
      id: 9,
      realname: '박찬양',
    },
    comment: '질문없습니다!',
    replies: [],
  },
];
