import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import ProgressWithBackground from '../../common/ProgressWithBackground';
import SpinCircle from '../../common/SpinCircle';
import MissionList from './MissionList';
import useFetch from '../../../hooks/useFetch';
import useMission from '../../../hooks/useMission';
import { missionsAtom, MissionSingleData } from '../../../store/dashboard';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';

function DashboardMission() {
  const { isLoading, data } = useFetch(API_URL_DASHBOARD.MISSION);
  const { missions, percent } = useMission(data);
  const setMission = useSetRecoilState<MissionSingleData[]>(missionsAtom);

  useEffect(() => {
    setMission(missions);
  }, [missions]);

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  return (
    <>
      <div className="dashboard__mission">
        <ProgressWithBackground header="과제진행률" percent={percent} />
        <MissionList missions={missions} />
      </div>
      <style jsx global>{`
        .dashboard__mission {
          width: 100%;
          height: 272px;
        }
      `}</style>
    </>
  );
}

export default DashboardMission;
