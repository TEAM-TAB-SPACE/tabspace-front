import { Fragment } from 'react';
import { CommentSingleData } from '../../store/comment';
import Comment from './Comment';

interface CommentsProps {
  depth: 1 | 2;
  comments: CommentSingleData[];
}

function Comments({ depth, comments }: CommentsProps) {
  return (
    <>
      {comments?.map(({ id, user, comment, replies }) => {
        return (
          <Fragment key={id}>
            <Comment
              depth={depth}
              isMyComment={true}
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
