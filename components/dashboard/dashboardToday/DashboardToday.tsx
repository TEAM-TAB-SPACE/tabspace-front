import ProgressWithBackground from 'components/common/ProgressWithBackground';
import SpinCircle from 'components/common/SpinCircle';
import GoLearnButton from './GoLearnButton';
import DashboardItemNoData from '../DashboardItemNoData';

import useFetch from 'hooks/useFetch';

import { TodayLectureSingleData } from 'store/dashboard';

import { DASHBOARD_TODAY_NO_DATA_MESSAGE } from 'constant/messages';

import { API_URL_DASHBOARD } from 'pages/api/dashboard';

function DashboardToday() {
  const { isLoading, data } = useFetch({ url: API_URL_DASHBOARD.TODAY });

  const todayLectures = data as unknown as TodayLectureSingleData[];

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  if (!todayLectures.length)
    return <DashboardItemNoData text={DASHBOARD_TODAY_NO_DATA_MESSAGE} />;

  return (
    <>
      <div className="dashboard__today">
        {todayLectures.map(
          ({ lecture: { title, videoId }, progress }, index) => (
            <ProgressWithBackground
              key={'today' + index}
              header={title}
              icon={<GoLearnButton videoId={videoId} />}
              percent={progress}
            />
          ),
        )}
      </div>
      <style jsx global>{`
        .dashboard__today {
          width: 100%;
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
