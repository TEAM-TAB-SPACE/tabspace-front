export interface TodayLectureSingleData {
  lecture: {
    title: string;
    videoId: string;
  };
  progress: number;
  completed: boolean;
}
