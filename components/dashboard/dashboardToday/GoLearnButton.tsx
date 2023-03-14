import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const fontStyle = {
  fontSize: '12px',
  color: '#999',
};

function GoLearnButton() {
  return (
    <Button
      type="link"
      icon={
        <>
          <span style={fontStyle}>학습하기</span>
          <RightOutlined style={fontStyle} />
        </>
      }
    ></Button>
  );
}

export default GoLearnButton;
