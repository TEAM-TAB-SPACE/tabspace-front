import { Card } from 'antd';

import variables from 'styles/variables.module.scss';

interface DashoardItemProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function DashboardItem({ title, style, children }: DashoardItemProps) {
  return (
    <>
      <Card className="dashboard__item" title={title} style={style}>
        {children}
      </Card>
      <style jsx global>{`
        .dashboard__item {
          margin-bottom: 30px;
          padding: 0;
          color: rgba(0, 0, 0, 0.88);
          font-size: 14px;
          line-height: 1.5714285714285714;
          list-style: none;
          position: relative;
          background: ${variables.white};
          border: 1px solid ${variables.borderColor};
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
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            height: calc(100% - 49px);
            border-radius: 0 0 8px 8px;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardItem;
