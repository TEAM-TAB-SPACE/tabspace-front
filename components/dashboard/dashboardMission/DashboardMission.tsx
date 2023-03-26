import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ProgressWithBackground from '../../common/ProgressWithBackground';
import SpinCircle from '../../common/SpinCircle';
import MissionList from './MissionList';
import useFetch from '../../../hooks/useFetch';
import useMission from '../../../hooks/useMission';
import {
  missionsAtom,
  MissionSingleData,
  missionsRefetchKeyAtom,
} from '../../../store/dashboard';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';

function DashboardMission() {
  const setMission = useSetRecoilState<MissionSingleData[]>(missionsAtom);
  const [refetchKey, setRefetchKey] = useRecoilState(missionsRefetchKeyAtom);

  const { isLoading, data } = useFetch({
    url: API_URL_DASHBOARD.MISSION,
    refetchKey: { key: refetchKey, setter: setRefetchKey },
  });

  const { missions, percent } = useMission(data);

  useEffect(() => {
    setMission(missions);
  }, [missions, setMission]);

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
