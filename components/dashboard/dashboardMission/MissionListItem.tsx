import { HeartFilled } from '@ant-design/icons';
import layout from '../../../styles/layout.module.scss';
import variables from '../../../styles/variables.module.scss';

interface MissionListItem {
  title: string;
  isSubmitted: boolean;
}

function MissionListItem({ title, isSubmitted }: MissionListItem) {
  return (
    <>
      <li className={`mission__item ${layout.flex_a_center_j_between}`}>
        <span className="mission__title">{title}</span>
        <HeartFilled
          style={{
            color: isSubmitted ? variables.primary : variables.purpleLight,
          }}
        />
      </li>
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
