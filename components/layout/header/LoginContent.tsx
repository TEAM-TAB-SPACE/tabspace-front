import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { MouseEventHandler } from 'react';
import layout from '../../../styles/layout.module.scss';
import AlarmButton from './AlarmButton';
import QRCheckInButton from './QRCheckInButton';
import useMediaQueryState from '../../../hooks/useMediaQueryState';
import MobileDrawer from './MobileDrawer';
import { User } from '../../../store/user';

interface LoginContentProps {
  user: User;
  onclickLoginout: MouseEventHandler;
  onClickDashboard: MouseEventHandler;
}

function LoginContent({
  user,
  onclickLoginout,
  onClickDashboard,
}: LoginContentProps) {
  const { isMobile } = useMediaQueryState();
  const { realname: username, id: userId } = user;

  return (
    <>
      {isMobile ? (
        <div className={`${layout.flex_center} loginContent__mobile`}>
          <QRCheckInButton {...{ userId }} />
          <AlarmButton />
          <MobileDrawer {...{ username, onclickLoginout }} />
        </div>
      ) : (
        <div className="username__div">
          <p>{username}님</p>
          <QRCheckInButton {...{ userId }} />
          <AlarmButton />
          <Button
            size="middle"
            type="text"
            onClick={onclickLoginout}
            style={{ padding: '4px 2px' }}
          >
            <LogoutOutlined style={{ fontSize: 18 }} />
          </Button>
          <Button
            size="large"
            style={{ height: '30px', padding: '2px 10px 0' }}
            onClick={onClickDashboard}
          >
            대시보드
          </Button>
        </div>
      )}
      <style jsx>{`
        .loginContent__mobile {
          gap: 20px;
        }

        .username__div {
          display: flex;
          align-items: center;
          gap: 23px;
          height: 34px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default LoginContent;
