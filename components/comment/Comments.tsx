import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import Comment from './Comment';
import { CommentSingleData } from '../../store/comment';
import { userAtom } from '../../store/user';

interface CommentsProps {
  depth: 1 | 2;
  comments: CommentSingleData[];
}

function Comments({ depth, comments }: CommentsProps) {
  const { id: userId } = useRecoilValue(userAtom);

  return (
    <>
      {comments?.map(({ id, user, comment, replies }) => {
        return (
          <Fragment key={id}>
            <Comment
              depth={depth}
              isMyComment={userId === user.id}
              commentId={id}
              userBadgeData={{ userName: user.realname }}
              content={comment}
            />
            {replies && <Comments depth={2} comments={replies} />}
          </Fragment>
        );
      })}
    </>
  );
}

export default Comments;
