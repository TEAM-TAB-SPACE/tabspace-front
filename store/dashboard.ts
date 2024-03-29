import { atom, selector } from 'recoil';
import { RefetchKey } from '../hooks/useFetch';

export interface TodayLectureSingleData {
  lecture: {
    title: string;
    videoId: string;
  };
  progress: number;
  completed: boolean;
}

export interface CalendarCellData {
  month: number;
  date: number;
  state: boolean;
}

export interface MissionStorage {
  id: number;
  url: string;
}

export interface MissionSingleData {
  id: number;
  homework: {
    title: string;
  };
  is_submitted: boolean;
  storages: MissionStorage[];
}

export interface MissionSelectOption {
  id: number;
  title: string;
}

export interface AttendanceData {
  attendance?: string;
}

export interface GrowthSingleData {
  id: number;
  lecture_category: {
    name: string;
  };
  ability: number;
  dashboard: number;
}

export interface GrowthChartCategory {
  name: string;
  ability: number;
}

export const missionsRefetchKeyAtom = atom<RefetchKey>({
  key: 'missionsRefetchKey',
  default: 'stale',
});

export const missionsAtom = atom({
  key: 'missionsAtom',
  default: Array<MissionSingleData>(),
});

export const missionsSelectOptionsSelector = selector<MissionSelectOption[]>({
  key: 'missionsSelectOptionsSelector',
  get: ({ get }) => {
    const missions = get(missionsAtom);
    return missions?.map(({ id, homework: { title } }) => {
      return {
        id,
        title,
      };
    });
  },
});
