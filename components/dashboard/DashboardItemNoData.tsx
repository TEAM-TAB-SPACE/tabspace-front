import variables from '../../styles/variables.module.scss';
import layout from '../../styles/layout.module.scss';

function DashboardItemNoData({ text }: { text: string }) {
  return (
    <div
      className={`${layout.flex_center} latest__notFound`}
      style={{
        width: '100%',
        height: '250px',
        color: variables.textSecondaryColor,
      }}
    >
      {text}
    </div>
  );
}

export default DashboardItemNoData;
