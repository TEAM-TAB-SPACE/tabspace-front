import { MissionSingleData } from '../store/dashboard';

const useMission = (missionsData: MissionSingleData[]) => {
  const missions = missionsData;

  const submittedCount = missionsData
    ? missionsData.filter(mission => mission.is_submitted).length
    : 0;

  const percent = (submittedCount / missionsData?.length) * 100;

  return { missions, submittedCount, percent };
};

export default useMission;
