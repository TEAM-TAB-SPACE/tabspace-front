import MissionListItem from './MissionListItem';
import { MissionSingleData } from '../../../store/dashboard';

interface MissionListProps {
  missions: MissionSingleData[];
}

function MissionList({ missions }: MissionListProps) {
  return (
    <>
      <ul className="mission__list">
        {missions.map(({ homework: { title }, id, is_submitted, storages }) => {
          return (
            <MissionListItem
              key={id}
              title={title}
              isSubmitted={is_submitted}
              files={storages}
            />
          );
        })}
      </ul>
      <style jsx global>{`
        .dashboard__mission {
          .mission__list {
            margin-top: 12px;
            height: calc(100% - 65px);
            overflow: scroll;
          }
        }
      `}</style>
    </>
  );
}

export default MissionList;
