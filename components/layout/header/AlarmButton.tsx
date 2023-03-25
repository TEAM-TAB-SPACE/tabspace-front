import { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Badge, Button, Popover } from 'antd';
import AlarmPopoverContent from './AlarmPopoverContent';
import useFetch from '../../../hooks/useFetch';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';

const EMOJI: { [key: string]: string } = {
  '(1)': '😀',
  '(2)': '🥺',
  '(3)': '🤓',
  '(4)': '🤗',
  '(5)': '😉',
  '(6)': '😎',
  '(7)': '🥰',
  '(8)': '😍',
  '(9)': '🥳',
  '(10)': '✨',
  '(11)': '🔥',
  '(12)': '🎉',
  '(13)': '🚗',
  '(14)': '👍',
};

function AlarmButton() {
  const { data } = useFetch({ url: API_URL_DASHBOARD.NOTIFICATION });
  const [isBadgeShow, setIsBadgeShow] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  //텍스트에서 기호 찾아 이모지로 변경
  const notifications = data?.notifications?.split(',').map((noti: string) => {
    const reg1 = new RegExp(/\([1-9][0-4]\)/g);
    const reg2 = new RegExp(/\(\d\)/g);
    const emojiKeysOfreg1 = noti.match(reg1) || [];
    const emojiKeysOfreg2 = noti.match(reg2) || [];

    return [...emojiKeysOfreg1, ...emojiKeysOfreg2].reduce(
      (notiWithEmoji, key) => {
        return notiWithEmoji.replaceAll(key, EMOJI[key]);
      },
      noti,
    );
  });

  useEffect(() => {
    if (!isClicked && notifications?.length) setIsBadgeShow(1);
  }, [isClicked, notifications, setIsBadgeShow]);

  return (
    <Popover
      className="header__notifications"
      content={<AlarmPopoverContent content={notifications} />}
      title="알림"
      trigger="click"
    >
      <Button
        size="middle"
        type="text"
        style={{ padding: '4px 2px' }}
        onClick={() => {
          setIsBadgeShow(0);
          setIsClicked(true);
        }}
      >
        <Badge dot count={isBadgeShow}>
          <NotificationOutlined style={{ fontSize: 16 }} />
        </Badge>
      </Button>
    </Popover>
  );
}

export default AlarmButton;
