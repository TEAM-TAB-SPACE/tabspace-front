import { QrcodeOutlined } from '@ant-design/icons';
import { Button, Popover, QRCode } from 'antd';

interface QRCheckInButtonProps {
  userId: number;
}

function QRCheckInButton({ userId }: QRCheckInButtonProps) {
  return (
    <>
      <Popover
        className="header__qrCheckIn"
        content={<QRCode value={String(userId)} />}
        trigger="click"
      >
        <Button size="middle" type="text" style={{ padding: '4px 2px' }}>
          <QrcodeOutlined value={userId} style={{ fontSize: 18 }} />
        </Button>
      </Popover>
      <style jsx global>{`
        .ant-popover-hidden {
        }
      `}</style>
    </>
  );
}

export default QRCheckInButton;
