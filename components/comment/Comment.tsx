import { useState } from 'react';

import UserBadge from './userBadge/UserBadge';
import ReplyButton from './ReplyButton';
import ReplyForm from './ReplyForm';

import variables from 'styles/variables.module.scss';

//types
import { UserBadgeData } from './userBadge/UserBadge';

interface CommentProps {
  isMyComment?: boolean;
  commentId: number;
  userBadgeData: UserBadgeData;
  content: string;
  depth?: 1 | 2;
}

function Comment({
  isMyComment = false,
  commentId,
  userBadgeData,
  content,
  depth = 1,
}: CommentProps) {
  const [isReplyMode, setIsReplyMode] = useState(false);

  const showReplyForm = () => setIsReplyMode(true);

  const hideReplyForm = () => setIsReplyMode(false);

  const handleReplyButtonClick = () => {
    if (isReplyMode) {
      hideReplyForm();
    } else {
      showReplyForm();
    }
  };

  return (
    <>
      <div className="comment">
        <UserBadge {...{ ...userBadgeData, depth, commentId, isMyComment }} />
        <div className="comment__text">{content}</div>

        {/* 댓글일 경우 답글달기 버튼 렌더링 */}
        {depth === 1 && <ReplyButton onClick={handleReplyButtonClick} />}

        {isReplyMode && <ReplyForm {...{ commentId, hideReplyForm }} />}
      </div>
      <style jsx>{`
        .comment {
          padding-left: ${depth === 2 ? '36px' : '0'};
          margin-bottom: 12px;
          line-height: 140%;

          &__text {
            width: 100%;
            padding: 0 25px 4px;
            font-size: 14px;
            word-break: break-all;
            color: ${variables.black};
          }
        }
      `}</style>
    </>
  );
}

export default Comment;
