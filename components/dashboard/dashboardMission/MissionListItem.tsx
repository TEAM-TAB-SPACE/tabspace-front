import { HeartFilled } from '@ant-design/icons';
import { Popover } from 'antd';
import MissionPopoverContent from './MissionPopoverContent';

import layout from 'styles/layout.module.scss';
import variables from 'styles/variables.module.scss';

interface MissionListItemProps {
  title: string;
  isSubmitted: boolean;
  files: { id: number; url: string }[];
}

function MissionListItem({ title, isSubmitted, files }: MissionListItemProps) {
  return (
    <>
      <Popover
        title="제출된 파일"
        content={<MissionPopoverContent {...{ files }} />}
      >
        <li className={`mission__item ${layout.flex_a_center_j_between}`}>
          <span className="mission__title">{title}</span>
          <HeartFilled
            style={{
              color: isSubmitted ? variables.primary : variables.purpleLight,
            }}
          />
        </li>
      </Popover>
      <style jsx global>{`
        .dashboard__mission {
          .mission__item {
            padding: 10px 16px;
            background-color: ${variables.purpleOpacity};
            border-radius: 12px;

            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }
        }
      `}</style>
    </>
  );
}

export default MissionListItem;
