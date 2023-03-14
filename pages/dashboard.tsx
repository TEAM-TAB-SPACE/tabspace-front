import DashboardGreeting from '../components/dashboard/DashboardGreeting';
import DashboardLatest from '../components/dashboard/DashboardLatest';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const dashboardItems = {
  greeting: { title: '', item: <DashboardGreeting username="모찌" /> },
  latest: { title: '가장 최근 항목', item: <DashboardLatest /> },
  today: { title: '오늘의 강의', item: <DashboardLatest /> },
  attendance: { title: '내 출셕', item: <DashboardLatest /> },
  mission: { title: '내 미션', item: <DashboardLatest /> },
  capable: { title: '내 역량', item: <DashboardLatest /> },
  submitMission: { title: '미션제출', item: <DashboardLatest /> },
};

function Dashboard() {
  return <DashboardLayout dashboardItems={dashboardItems} />;
}

export default Dashboard;
