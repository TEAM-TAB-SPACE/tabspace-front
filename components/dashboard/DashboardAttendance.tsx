import { Calendar } from 'antd';
import variables from '../../styles/variables.module.scss';

const attendanceData = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1];

const dateCellRender = (value: any) => {
  const listData = attendanceData;

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
      {listData.map((state, index) => {
        const day = index + 1;
        const month = new Date().getMonth();

        if (value.month() === month && day === value.date() && state)
          return <div key={index} style={style}></div>;
      })}
    </>
  );
};

function DashboardAttendance() {
  return (
    <>
      <div className="dashboard__attendance">
        <Calendar fullscreen={false} dateCellRender={dateCellRender} />
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
