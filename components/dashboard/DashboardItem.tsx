import { Card } from 'antd';

interface DashoardItemProps {
  children: React.ReactNode;
}

function DashboardItem({ children }: DashoardItemProps) {
  return (
    <>
      <Card className="dashboard__item" title="가장 최근 강의">
        {children}
      </Card>
      <style jsx global>{`
        .dashboard__item {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: rgba(0, 0, 0, 0.88);
          font-size: 14px;
          line-height: 1.5714285714285714;
          list-style: none;
          position: relative;
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 8px;

          .ant-card-head {
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: auto;
            padding: 24px 24px 0;
            margin-bottom: -1px;
            color: rgba(0, 0, 0, 0.88);
            font-weight: 600;
            font-size: 16px;
            background: transparent;
            border-bottom: none;
            border-radius: 8px 8px 0 0;
          }

          .ant-card-body {
            padding: 24px;
            border-radius: 0 0 8px 8px;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardItem;
