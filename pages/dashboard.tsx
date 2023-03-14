import { Layout, Row, Col } from 'antd';
import DashboardItem from '../components/dashboard/DashboardItem';
import DashboardLatestLecture from '../components/dashboard/DashboardLatestLecture';

const { Content } = Layout;

const layoutStyle = {
  margin: '0 auto',
  maxWidth: '1073px',
  width: '100%',
  background: 'transparent',
};

function Dashboard() {
  return (
    <>
      <Layout style={layoutStyle}>
        <Content>
          <Row gutter={22}>
            <Col flex={1}>
              <DashboardItem>
                <DashboardLatestLecture />
              </DashboardItem>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Dashboard;
