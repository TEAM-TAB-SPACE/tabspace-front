import React from 'react';
import UserBadgeText from './UserBadgeText';
import layout from '../../styles/layout.module.scss';
import UserBadgeIndicator from '../userBadge/UserBadgeIndicator';

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
  elapsedTime = null,
  commentId,
  depth,
}: UserBadgeProps) {
  return (
    <div
      className={layout.flex_a_center_j_between}
      style={{ position: 'relative' }}
    >
      <UserBadgeText {...{ userName, elapsedTime }} />
      {isMyComment && <UserBadgeIndicator {...{ depth, commentId }} />}
    </div>
  );
}

export default UserBadge;
