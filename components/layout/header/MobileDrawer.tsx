import { MouseEventHandler, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { Button, Drawer } from 'antd';

interface MobileDrawerProps {
  username: string;
  onclickLoginout: MouseEventHandler;
}

function MobileDrawer({ username = '', onclickLoginout }: MobileDrawerProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size="middle"
        type="text"
        onClick={showDrawer}
        style={{ padding: 0 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        title={`${username}님`}
        width={200}
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Button size="small" onClick={onclickLoginout}>
            로그아웃
          </Button>
        }
      >
        <button
          className="drawer__item"
          onClick={() => {
            router.push('/dashboard');
            onClose();
          }}
        >
          대시보드
        </button>
      </Drawer>
      <style jsx>{`
        .drawer__item {
          width: 100%;
          height: 50px;
          font-size: 16px;
          text-align: left;
          background: transparent;
          border: none;
        }
      `}</style>
    </>
  );
}

export default MobileDrawer;
