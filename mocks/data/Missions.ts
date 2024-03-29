import { MissionSingleData } from '../../store/dashboard';

export const Missions = () => {
  let missions = missionData;

  const getMissions = () => missions;

  const setMissions = (newMissions: MissionSingleData[]) => {
    missions = newMissions;
  };

  const submitMission = (id: number) => {
    const newMissions = missions.map(mission => {
      if (mission.id === id) {
        mission.is_submitted = true;
        mission.storages = [
          {
            id: 10,
            url: 'https://ds3h3lok6dodu.cloudfront.net/4aaee37e-f7fb-4dc3-865c-e21bf223478a/7/20230318_214624_test2.py',
          },
        ];
      }
      return mission;
    });
    setMissions(newMissions);
  };

  const deleteSubmittedFile = (id: number) => {
    const newMissions = missions.map(mission => {
      if (mission.id === id) {
        mission.is_submitted = false;
        mission.storages = [];
      }
      return mission;
    });

    setMissions(newMissions);
  };

  return {
    getMissions,
    setMissions,
    submitMission,
    deleteSubmittedFile,
  };
};

const missionData = [
  {
    id: 6,
    homework: {
      title: 'HTML&CSS 과제',
    },
    is_submitted: false,
    storages: [],
  },
  {
    id: 7,
    homework: {
      title: 'Javascript 과제',
    },
    is_submitted: true,
    storages: [
      {
        id: 5,
        url: 'https://ds3h3lok6dodu.cloudfront.net/4aaee37e-f7fb-4dc3-865c-e21bf223478a/7/20230318_214621_test2.py',
      },
      {
        id: 6,
        url: 'https://ds3h3lok6dodu.cloudfront.net/4aaee37e-f7fb-4dc3-865c-e21bf223478a/7/20230318_214624_test2.py',
      },
    ],
  },
  {
    id: 8,
    homework: {
      title: 'GitHub 과제',
    },
    is_submitted: false,
    storages: [],
  },
  {
    id: 9,
    homework: {
      title: '알고리즘 과제',
    },
    is_submitted: false,
    storages: [],
  },
  {
    id: 10,
    homework: {
      title: 'React 과제',
    },
    is_submitted: false,
    storages: [],
  },
];
