import { atom } from 'recoil';

export interface LectureRoomSingleData {
  id: number;
  lecture: {
    id: number;
    title: string;
    category: string;
    teacher: string;
    duration: number;
    videoId: string;
    date: string;
    today_lecture: boolean;
    active_lecture: boolean;
  };
  playtime: number;
  is_clicked: boolean;
  completed: boolean;
}

export interface PlaylistItem {
  key: string;
  label: string;
  children: {
    key: string;
    label: string;
  }[];
}

export const selectedLectureIdAtom = atom({
  key: 'selectedLectureIdAtom',
  default: 1,
});

export const playlistAtom = atom({
  key: 'playlistSelector',
  default: new Array<PlaylistItem>(),
});

const pickCategories = (lectureroomData: LectureRoomSingleData[]) => {
  const categories = lectureroomData.reduce(
    (categories: string[], item: LectureRoomSingleData) => {
      const category = item.lecture.category;
      if (!categories.includes(category)) return [...categories, category];
      return categories;
    },
    [],
  );

  return categories;
};

const addPlaylistItemChildren = (
  playlistItem: PlaylistItem,
  key: string,
  label: string,
) => {
  playlistItem.children = [...playlistItem.children, { key, label }];
};

const createPlaylistItem = (key: string, label: string) => {
  return {
    key,
    label,
    children: [],
  };
};

const isNewCategory = (
  prevCategories: string[],
  lectureCategory: string,
  category: string,
) => !prevCategories.includes(lectureCategory) && lectureCategory !== category;

export const convertToPlaylist = (lectureroomData: LectureRoomSingleData[]) => {
  const categories = pickCategories(lectureroomData);
  let prevCategories: string[] = [];

  const playlist = categories.reduce(
    (playlist: PlaylistItem[], category: string, index: number) => {
      const newPlaylistItem: PlaylistItem = createPlaylistItem(
        `menu${index + 1}`,
        category,
      );

      for (const item of lectureroomData) {
        const { id, category: lectureCategory, title } = item.lecture;

        if (isNewCategory(prevCategories, lectureCategory, category)) {
          prevCategories = [...prevCategories, category];
          break;
        }

        if (lectureCategory === category) {
          addPlaylistItemChildren(newPlaylistItem, `item${id}`, title);
        }
      }

      return [...playlist, newPlaylistItem];
    },
    [],
  );

  return playlist;
};
