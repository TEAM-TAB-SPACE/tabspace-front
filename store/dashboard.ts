import { atom } from 'recoil';

export interface TodayLectureSingleData {
  lecture: {
    title: string;
    videoId: string;
  };
  progress: number;
  completed: boolean;
}

export const todayLecturesAtom = atom<TodayLectureSingleData[]>({
  key: 'todayLecturesAtom',
  default: Array<TodayLectureSingleData>(),
});
