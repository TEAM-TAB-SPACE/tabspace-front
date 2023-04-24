import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import { INTERNAL } from '../../../constant/urls';

interface GoLearnButtonProps {
  videoId: string;
}

const fontStyle = {
  fontSize: '12px',
  color: '#999',
};

function GoLearnButton({ videoId }: GoLearnButtonProps) {
  return (
    <Button
      type="link"
      icon={
        <>
          <Link href={`${INTERNAL.lecture}/${videoId}`} style={fontStyle}>
            학습하기
            <RightOutlined />
          </Link>
        </>
      }
    ></Button>
  );
}

export default GoLearnButton;
