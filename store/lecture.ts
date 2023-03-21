import { atom, selectorFamily } from 'recoil';
import type { MenuProps } from 'antd';
import { SubMenuType } from 'antd/es/menu/hooks/useItems';

export type MenuItem = Required<MenuProps>['items'][number];

export interface LectureRoomSingleData {
  id: number;
  lecture: {
    id: number;
    title: string;
    category: {
      name: string;
    };
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

export const allLectureAtom = atom({
  key: 'allLectureAtom',
  default: new Array<LectureRoomSingleData>(),
});

export const playlistAtom = atom({
  key: 'playlistAtom',
  default: new Array<MenuItem>(),
});

export const currentLectureSelector = selectorFamily<
  LectureRoomSingleData,
  string
>({
  key: 'currentLectureSelector',
  get:
    videoId =>
    ({ get }) => {
      const allLecture = get(allLectureAtom);

      return allLecture.filter(({ lecture }) => lecture.videoId === videoId)[0];
    },
});

const pickCategories = (lectureroomData: LectureRoomSingleData[]) => {
  const categories = lectureroomData.reduce(
    (categories: string[], item: LectureRoomSingleData) => {
      const category = item.lecture.category.name;
      if (!categories.includes(category)) return [...categories, category];

      return categories;
    },
    [],
  );

  return categories;
};

const addPlaylistItemChildren = (
  playlistItem: SubMenuType,
  key: string,
  label: string,
  disabled: boolean,
) => {
  const newPlaylistItemChildren = [
    ...playlistItem?.children,
    { key, label, disabled },
  ];
  playlistItem.children = newPlaylistItemChildren;
};

const createPlaylistItem = (key: string, label: string): SubMenuType => {
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
    (playlist: MenuItem[], category: string): MenuItem[] => {
      const newPlaylistItem = createPlaylistItem(category, category);

      for (const item of lectureroomData) {
        const {
          videoId,
          category: { name: lectureCategory },
          title,
          active_lecture,
        } = item.lecture;

        if (isNewCategory(prevCategories, lectureCategory, category)) {
          prevCategories = [...prevCategories, category];
          break;
        }

        if (lectureCategory === category) {
          addPlaylistItemChildren(
            newPlaylistItem,
            videoId,
            title,
            !active_lecture,
          );
        }
      }

      return [...playlist, newPlaylistItem];
    },
    [],
  );

  return playlist;
};
