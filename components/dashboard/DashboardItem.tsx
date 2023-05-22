import { Card } from 'antd';

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
        }
      `}</style>
    </>
  );
}

export default DashboardItem;
