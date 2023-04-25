import SpinCircle from 'components/common/SpinCircle';
import GrowthChart from './GrowthChart';

import useFetch from 'hooks/useFetch';

import { GrowthChartCategory, GrowthSingleData } from 'store/dashboard';

import { API_URL_DASHBOARD } from 'pages/api/dashboard';

function DashboardGrowth() {
  const { isLoading, data } = useFetch({ url: API_URL_DASHBOARD.GROWTH });

  const chartData = (data as unknown as GrowthSingleData[]).reduce(
    (
      chartData: GrowthChartCategory[],
      { lecture_category, ability }: GrowthSingleData,
    ) => {
      return [...chartData, { name: lecture_category.name, ability }];
    },
    [],
  );

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  return (
    <>
      <div className="dashboard__capable">
        <GrowthChart data={chartData} indexBy="name" keys={['ability']} />
      </div>
      <style jsx global>{`
        .dashboard__capable {
          width: 100%;
          height: 272px;
        }
      `}</style>
    </>
  );
}

export default DashboardGrowth;
