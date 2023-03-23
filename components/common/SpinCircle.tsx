import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import layout from '../../styles/layout.module.scss';
import variables from '../../styles/variables.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface SpinCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

function SpinCircle({ className, style }: SpinCircleProps) {
  return (
    <>
      <div className={`${layout.flex_center} ${className}`} style={style}>
        <Spin indicator={antIcon} />
      </div>
      <style jsx global>{`
        .ant-spin {
          color: ${variables.primary};
        }
      `}</style>
    </>
  );
}

export default SpinCircle;
