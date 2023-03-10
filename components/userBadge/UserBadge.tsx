import React from 'react';
import UserBadgeText from './UserBadgeText';
import { UserBadgeData } from './userBadge';
import layout from '../../styles/layout.module.scss';
import UserBadgeIndicator from '../userBadge/UserBadgeIndicator';

interface UserBadgeProps extends UserBadgeData {
  isMyComment?: boolean;
  onClickIndicator: React.MouseEventHandler<HTMLButtonElement>;
}

function UserBadge({
  isMyComment,
  userName,
  elapsedTime = null,
  onClickIndicator,
}: UserBadgeProps) {
  return (
    <div className={layout.flex_a_center_j_between}>
      <UserBadgeText {...{ userName, elapsedTime }} />
      {isMyComment && <UserBadgeIndicator onClick={onClickIndicator} />}
    </div>
  );
}

export default UserBadge;
