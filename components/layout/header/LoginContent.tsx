import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { MouseEventHandler } from 'react';
import layout from '../../../styles/layout.module.scss';
import AlarmButton from './AlarmButton';
import useMediaQueryState from '../../../hooks/useMediaQueryState';
import MobileDrawer from './MobileDrawer';

interface LoginContentProps {
  username: string;
  onclickLoginout: MouseEventHandler;
  onClickDashboard: MouseEventHandler;
}

function LoginContent({
  username,
  onclickLoginout,
  onClickDashboard,
}: LoginContentProps) {
  const { isMobile } = useMediaQueryState();

  return (
    <>
      {isMobile ? (
        <div className={`${layout.flex_center} loginContent__mobile`}>
          <AlarmButton />
          <MobileDrawer {...{ username, onclickLoginout }} />
        </div>
      ) : (
        <div className="username__div">
          <p>{username}님</p>
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
