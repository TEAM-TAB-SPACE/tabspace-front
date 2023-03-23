import { Spin } from 'antd';
import layout from '../../styles/layout.module.scss';
import variables from '../../styles/variables.module.scss';

function Spinner() {
  return (
    <>
      <div className={`${layout.flex_center} spinner`}>
        <Spin size="large" />
      </div>
      <style jsx global>{`
        .spinner {
          height: 100vh;
        }

        .ant-spin {
          &-dot-item {
            background-color: ${variables.primary} !important;
          }
        }
      `}</style>
    </>
  );
}

export default Spinner;
