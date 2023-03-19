import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { HeartFilled } from '@ant-design/icons';
import ProgressWithBackground from '../common/ProgressWithBackground';
import SpinCircle from '../common/SpinCircle';
import variables from '../../styles/variables.module.scss';
import layout from '../../styles/layout.module.scss';
import useFetch from '../../hooks/useFetch';
import useMission from '../../hooks/useMission';
import { missionsAtom, MissionSingleData } from '../../store/dashboard';
import { API_URL_DASHBOARD } from '../../pages/api/dashboard';

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
        <ul className="mission__list">
          {missions.map(({ homework: { title }, is_submitted }, index) => {
            return (
              <li
                className={`mission__item ${layout.flex_a_center_j_between}`}
                key={index}
              >
                <span className="mission__title">{title}</span>
                <HeartFilled
                  style={{
                    color: is_submitted
                      ? variables.primary
                      : variables.purpleLight,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx global>{`
        .dashboard__mission {
          width: 100%;
          height: 272px;

          .mission__list {
            margin-top: 12px;
            height: calc(100% - 65px);
            overflow: scroll;
          }

          .mission__item {
            padding: 10px 16px;
            background-color: ${variables.purpleOpacity};
            border-radius: 12px;

            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }
        }
      `}</style>
    </>
  );
}

export default DashboardMission;
