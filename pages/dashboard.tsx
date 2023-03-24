import { GetServerSideProps } from 'next';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardGreeting from '../components/dashboard/DashboardGreeting';
import DashboardLatest from '../components/dashboard/DashboardLatest';
import DashboardToday from '../components/dashboard/dashboardToday/DashboardToday';
import DashboardMissionSubmit from '../components/dashboard/dashboardMission/DashboardMissionSubmit';
import DashboardAttendance from '../components/dashboard/DashboardAttendance';
import DashboardMission from '../components/dashboard/dashboardMission/DashboardMission';
import DashboardGrowth from '../components/dashboard/dashboardGrowth/DashboardGrowth';
import { cookieStringToObject } from '../utils/cookie';

const dashboardItems = {
  greeting: { title: '', item: <DashboardGreeting /> },
  latest: { title: '가장 최근 강의', item: <DashboardLatest /> },
  today: { title: '오늘의 강의', item: <DashboardToday /> },
  attendance: { title: '내 출석', item: <DashboardAttendance /> },
  mission: { title: '내 미션', item: <DashboardMission /> },
  capable: { title: '내 역량', item: <DashboardGrowth /> },
  submitMission: { title: '미션제출', item: <DashboardMissionSubmit /> },
};

function Dashboard() {
  return <DashboardLayout dashboardItems={dashboardItems} />;
}

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = cookieStringToObject(context.req?.headers?.cookie || '');

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
