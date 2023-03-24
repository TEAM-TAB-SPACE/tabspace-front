import { Layout, Row, Col } from 'antd';
import DashboardItem from '../../components/dashboard/DashboardItem';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import variables from '../../styles/variables.module.scss';

const { Content } = Layout;

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
  const { isMobile, isTablet } = useMediaQueryState();

  const layoutStyle = {
    margin: isMobile ? '0 16px' : '0 auto',
    maxWidth: '1073px',
    background: 'transparent',
  };

  const contentStyle = {
    margin: '50px 16px',
    minHeight: 120,
    lineHeight: '120px',
    color: variables.black,
  };

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
          <Row gutter={22} justify={'space-between'}>
            <Col flex={isMobile ? '100%' : '160px'}>
              <div className="dashboard__user" style={{ marginBottom: '30px' }}>
                {greeting.item}
              </div>
            </Col>
            <Col flex={isMobile ? '100%' : isTablet ? '500px' : '380px'}>
              <DashboardItem title={latest.title} style={{ height: '348px' }}>
                {latest.item}
              </DashboardItem>
            </Col>
            <Col flex="auto">
              <DashboardItem title={today.title}>{today.item}</DashboardItem>
            </Col>
          </Row>

          <Row gutter={22}>
            <Col flex={isMobile ? '100%' : '1 1 300px'}>
              <DashboardItem title={attendance.title}>
                {attendance.item}
              </DashboardItem>
            </Col>
            <Col flex={isMobile ? 'auto' : '1 1 300px'}>
              <DashboardItem title={capable.title}>
                {capable.item}
              </DashboardItem>
            </Col>
            <Col flex={isMobile ? '100%' : '1 1 300px'}>
              <DashboardItem title={mission.title}>
                {mission.item}
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
