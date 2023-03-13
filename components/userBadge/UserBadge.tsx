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
}

function UserBadge({
  isMyComment,
  userName,
  elapsedTime = null,
}: UserBadgeProps) {
  return (
    <div className={layout.flex_a_center_j_between}>
      <UserBadgeText {...{ userName, elapsedTime }} />
      {isMyComment && <UserBadgeIndicator />}
    </div>
  );
}

export default UserBadge;
