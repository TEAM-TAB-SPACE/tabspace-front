import { HeartFilled } from '@ant-design/icons';
import { Popover } from 'antd';
import layout from '../../../styles/layout.module.scss';
import variables from '../../../styles/variables.module.scss';

import MissionPopoverContent from './MissionPopoverContent';

interface MissionListItemProps {
  missionId: number;
  title: string;
  isSubmitted: boolean;
  files: { id: number; url: string }[];
}

function MissionListItem({
  missionId,
  title,
  isSubmitted,
  files,
}: MissionListItemProps) {
  const url = files.length ? files[0].url : '';

  return (
    <>
      <Popover
        title="제출된 파일"
        content={<MissionPopoverContent {...{ missionId, url }} />}
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
