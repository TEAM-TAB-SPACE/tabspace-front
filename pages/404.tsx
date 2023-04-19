import layout from '../styles/layout.module.scss';
import { Result } from 'antd';

function Custom404() {
  return (
    <div
      className={`${layout.flex_center}`}
      style={{
        position: 'absolute',
        zIndex: 9999,
        top: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <Result status="404" title="404" subTitle="페이지를 찾을 수 없습니다." />
    </div>
  );
}

export default Custom404;
