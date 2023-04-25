import { Progress } from 'antd';

import variables from 'styles/variables.module.scss';
import layout from 'styles/layout.module.scss';
import text from 'styles/text.module.scss';

interface ProgressWithBackground {
  header?: string;
  icon?: React.ReactNode;
  percent: number;
}

function ProgressWithBackground({
  header,
  icon,
  percent,
}: ProgressWithBackground) {
  return (
    <>
      <div className={`progress__withBackground ${layout.flex_center}`}>
        <div className={`progress__header ${layout.flex_a_center_j_between}`}>
          <span className={text.ellipsis_oneLine}>{header}</span>
          {icon}
        </div>
        <Progress percent={percent} strokeColor={variables.primary} />
      </div>
      <style jsx global>{`
        .progress__withBackground {
          flex-wrap: wrap;
          padding: 10px 16px;
          background-color: ${variables.purpleOpacity};
          border-radius: 12px;
        }

        .progress__header {
          color: ${variables.black};
          width: 100%;
          font-size: 15px;
        }

        .ant-progress {
          &-line {
            margin-inline-end: 0;
            margin-bottom: 0;
          }

          &-text {
            color: #999 !important;
          }
        }
      `}</style>
    </>
  );
}

export default ProgressWithBackground;
