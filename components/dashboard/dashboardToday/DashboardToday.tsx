import { todayLecturesData } from '../../../mocks/data/todayLecturesData';
import ProgressWithBackground from '../../common/ProgressWithBackground';
import GoLearnButton from './GoLearnButton';

function DashboardToday() {
  const todayLectures = todayLecturesData;

  return (
    <>
      <div className="dashboard__today">
        {todayLectures.map(({ lecture, progress }, index) => (
          <ProgressWithBackground
            key={'today' + index}
            header={lecture.title}
            icon={<GoLearnButton />}
            percent={progress}
          />
        ))}
      </div>
      <style jsx global>{`
        .dashboard__today {
          overflow-y: scroll;
          min-height: 250px;
          max-height: 250px;

          .progress__withBackground:not(:last-child) {
            margin-bottom: 14px;
          }

          .ant-btn {
            width: auto;
            background-color: transparent;
            border: none;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardToday;
