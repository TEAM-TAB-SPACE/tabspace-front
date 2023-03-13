import { Spin } from 'antd';
import layout from '../../styles/layout.module.scss';

function Spinner() {
  return (
    <>
      <div className={`${layout.flex_center} spinner`}>
        <Spin size="large" />
      </div>
      <style jsx>{`
        .spinner {
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Spinner;
