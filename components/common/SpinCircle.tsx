import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import layout from 'styles/layout.module.scss';

interface SpinCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function SpinCircle({ className, style }: SpinCircleProps) {
  return (
    <>
      <div className={`${layout.flex_center} ${className}`} style={style}>
        <Spin indicator={antIcon} />
      </div>
    </>
  );
}

export default SpinCircle;
