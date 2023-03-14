import DashboardLatestLecture from '../components/dashboard/DashboardLatestLecture';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const dashboardItems = {
  greeting: {
    title: '',
    item: (
      <div>
        안녕하세요
        <br />
        문예림님!
      </div>
    ),
  },
  latest: { title: '가장 최근 항목', item: <DashboardLatestLecture /> },
  today: { title: '오늘의 강의', item: <DashboardLatestLecture /> },
  attendance: { title: '내 출셕', item: <DashboardLatestLecture /> },
  mission: { title: '내 미션', item: <DashboardLatestLecture /> },
  capable: { title: '내 역량', item: <DashboardLatestLecture /> },
  submitMission: { title: '미션제출', item: <DashboardLatestLecture /> },
};

function Dashboard() {
  return <DashboardLayout dashboardItems={dashboardItems} />;
}

export default Dashboard;
