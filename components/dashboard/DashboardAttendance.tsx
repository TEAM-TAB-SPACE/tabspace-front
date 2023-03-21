import { Calendar } from 'antd';
import variables from '../../styles/variables.module.scss';
import SpinCircle from '../common/SpinCircle';
import useFetch from '../../hooks/useFetch';
import useAttendance from '../../hooks/useAttendance';
import { API_URL_DASHBOARD } from '../../pages/api/dashboard';

const dateCellRender = (listData: []) => (value: any) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: variables.purpleLight,
    borderRadius: '4px',
  };

  return (
    <>
      {listData?.map(({ month, date, state }, index) => {
        if (value.month() === month && date === value.date() && state)
          return <div key={index} style={style}></div>;
      })}
    </>
  );
};

function DashboardAttendance() {
  const { isLoading, data } = useFetch({ url: API_URL_DASHBOARD.ATTENDANCE });
  const attendanceData = {
    startDate: data && new Date(data.start_date),
    attendance: data?.attendance || '',
  };

  const calendarData = useAttendance(attendanceData);

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  return (
    <>
      <div className="dashboard__attendance">
        <Calendar
          fullscreen={false}
          dateCellRender={dateCellRender(calendarData)}
        />
      </div>
      <style jsx global>{`
        .dashboard__attendance {
          .ant-picker {
            &-calendar-header {
              display: none !important;
            }

            &-calendar
              .ant-picker-cell-in-view.ant-picker-cell-selected
              .ant-picker-cell-inner {
              color: ${variables.black};
              background: transparent;
            }

            &-panel {
              border-top: none;
            }

            &-cell-inner::before {
              border: 1px solid ${variables.primary} !important;
            }
          }
        }
      `}</style>
    </>
  );
}

export default DashboardAttendance;
