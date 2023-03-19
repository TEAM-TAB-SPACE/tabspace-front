import { atom, selector } from 'recoil';

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

export const missionsAtom = atom({
  key: 'missionsAtom',
  default: Array<MissionSingleData>(),
});
