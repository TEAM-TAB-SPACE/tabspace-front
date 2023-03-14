import { Layout, Row, Col } from 'antd';
import DashboardItem from '../../components/dashboard/DashboardItem';
import variables from '../../styles/variables.module.scss';

const { Content } = Layout;

const layoutStyle = {
  margin: '0 auto',
  maxWidth: '1073px',
  width: '100%',
  background: 'transparent',
};

const contentStyle = {
  margin: '50px 16px',
  minHeight: 120,
  lineHeight: '120px',
  color: variables.black,
};

type DashboardItemName =
  | 'greeting'
  | 'latest'
  | 'today'
  | 'attendance'
  | 'mission'
  | 'capable'
  | 'submitMission';

interface DashboardItem {
  title: string;
  item: React.ReactNode;
}

interface DashboardLayoutProps {
  dashboardItems: {
    [itemName in DashboardItemName]: DashboardItem;
  };
}

function DashboardLayout({ dashboardItems }: DashboardLayoutProps) {
  const {
    greeting,
    latest,
    today,
    attendance,
    mission,
    capable,
    submitMission,
  } = dashboardItems;

  return (
    <>
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>
          <Row gutter={22} style={{ marginBottom: '50px' }}>
            <Col flex={0.2} span={24}>
              <div className="dashboard__user">{greeting.item}</div>
            </Col>
            <Col flex={1} span={24}>
              <DashboardItem title={latest.title}>{latest.item}</DashboardItem>
            </Col>
            <Col flex={1}>
              <DashboardItem title={today.title}>{today.item}</DashboardItem>
            </Col>
          </Row>
          <Row gutter={22} style={{ marginBottom: '50px' }}>
            <Col flex={1}>
              <DashboardItem title={attendance.title}>
                {attendance.item}
              </DashboardItem>
            </Col>
            <Col flex={1}>
              <DashboardItem title={mission.title}>
                {mission.item}
              </DashboardItem>
            </Col>
            <Col flex={1}>
              <DashboardItem title={capable.title}>
                {capable.item}
              </DashboardItem>
            </Col>
          </Row>
          <Row gutter={22}>
            <Col flex={1}>
              <DashboardItem title={submitMission.title}>
                {submitMission.item}
              </DashboardItem>
            </Col>
          </Row>
        </Content>
      </Layout>
      <style jsx>{`
        .dashboard__user {
          padding-top: 10px;
          width: 100%;
          font-size: 20px;
          font-weight: 700;
          line-height: 140%;
          color: ${variables.black};
        }
      `}</style>
    </>
  );
}

export default DashboardLayout;
