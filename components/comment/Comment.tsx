import React from 'react';
import UserBadge from '../userBadge/UserBadge';
import { UserBadgeData } from '../userBadge/UserBadge';
import ReplyButton from './ReplyButton';

interface CommentProps {
  isMyComment?: boolean;
  commentId: number;
  userBadgeData: UserBadgeData;
  content: string;
  depth?: 1 | 2;
  onClickReply?: React.MouseEventHandler<HTMLButtonElement>;
  onClickIndicator?: React.MouseEventHandler<HTMLButtonElement>;
}

function Comment({
  isMyComment = false,
  commentId,
  userBadgeData,
  content,
  depth = 1,
  onClickReply,
  onClickIndicator,
}: CommentProps) {
  return (
    <>
      <div className="comment">
        <UserBadge
          {...{ ...userBadgeData, commentId, isMyComment, onClickIndicator }}
        />
        <div className="comment__text">{content}</div>
        {depth === 1 && <ReplyButton onClick={onClickReply} />}
      </div>
      <style jsx>{`
        .comment {
          padding-left: ${depth === 2 ? '36px' : '0'};
          margin-bottom: 12px;
          line-height: 140%;

          &__text {
            padding: 0 25px 4px;
            font-size: 14px;
            color: #111;
          }
        }
      `}</style>
    </>
  );
}

export default Comment;
