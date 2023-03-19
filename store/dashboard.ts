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
