import React from 'react';

import UserBadgeIndicator from './UserBadgeIndicator';

import layout from 'styles/layout.module.scss';
import variables from 'styles/variables.module.scss';

export interface UserBadgeData {
  userName: string;
  elapsedTime?: string | null;
}

interface UserBadgeProps extends UserBadgeData {
  isMyComment?: boolean;
  commentId: number;
  depth: 1 | 2;
}

function UserBadge({
  isMyComment,
  userName,
  commentId,
  depth,
}: UserBadgeProps) {
  return (
    <>
      <div
        className={layout.flex_a_center_j_between}
        style={{ position: 'relative' }}
      >
        <div className="name">{userName}</div>
        {isMyComment && <UserBadgeIndicator {...{ depth, commentId }} />}
      </div>
      <style jsx>{`
        .name {
          display: 'inline-block';
          color: ${variables.black};
          margin-right: 7px;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default UserBadge;
