import { Calendar } from 'antd';
import SpinCircle from 'components/common/SpinCircle';

import useFetch from 'hooks/useFetch';
import useAttendance from 'hooks/useAttendance';

import { AttendanceData, CalendarCellData } from 'store/dashboard';

import { API_URL_DASHBOARD } from 'pages/api/dashboard';

import variables from 'styles/variables.module.scss';

//types
import type { Dayjs } from 'dayjs';

const dateCellRender = (listData: CalendarCellData[] = [], value: Dayjs) => {
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

  const { attendance }: AttendanceData = data || {};

  const calendarData = useAttendance(attendance);

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  return (
    <>
      <div className="dashboard__attendance">
        <Calendar
          fullscreen={false}
          dateCellRender={value => dateCellRender(calendarData, value)}
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
          }
        }
      `}</style>
    </>
  );
}

export default DashboardAttendance;
