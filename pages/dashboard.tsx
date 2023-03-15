import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardGreeting from '../components/dashboard/DashboardGreeting';
import DashboardLatest from '../components/dashboard/DashboardLatest';
import DashboardToday from '../components/dashboard/dashboardToday/DashboardToday';
import DashboardMissionSubmit from '../components/dashboard/DashboardMissionSubmit';

const dashboardItems = {
  greeting: { title: '', item: <DashboardGreeting username="모찌" /> },
  latest: { title: '가장 최근 강의', item: <DashboardLatest /> },
  today: { title: '오늘의 강의', item: <DashboardToday /> },
  attendance: { title: '내 출석', item: <DashboardLatest /> },
  mission: { title: '내 미션', item: <DashboardLatest /> },
  capable: { title: '내 역량', item: <DashboardLatest /> },
  submitMission: { title: '미션제출', item: <DashboardMissionSubmit /> },
};

function Dashboard() {
  return <DashboardLayout dashboardItems={dashboardItems} />;
}

export default Dashboard;
