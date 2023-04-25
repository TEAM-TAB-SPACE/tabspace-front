import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { missionsAtom, MissionSingleData } from 'store/dashboard';

function useMission(missionsData?: MissionSingleData[]) {
  const [missions, setMission] =
    useRecoilState<MissionSingleData[]>(missionsAtom);

  useEffect(() => {
    if (missionsData) setMission(missionsData);
  }, [missionsData, setMission]);

  const submittedCount = missions
    ? missions.filter(mission => mission.is_submitted).length
    : 0;

  const percent = (submittedCount / missions?.length) * 100;

  return { missions, submittedCount, percent };
}

export default useMission;
