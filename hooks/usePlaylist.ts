import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  allLectureAtom,
  convertToPlaylist,
  LectureRoomSingleData,
  playlistAtom,
} from '../store/lecture';
import { callPlaylistApi } from '../pages/api/lecture';
import { isDevMode } from '../config/config.export';
import { sleep } from '../utils/time';

const usePlaylist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allLecture, setAllLecture] = useRecoilState(allLectureAtom);
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  useEffect(() => {
    (async () => {
      const getLectureroomData = async () => {
        const data: LectureRoomSingleData[] = await callPlaylistApi();

        if (data instanceof Error) return;

        setAllLecture(data);
        setIsLoading(false);
      };

      if (isDevMode) {
        await sleep(500);
        getLectureroomData();
      } else {
        getLectureroomData();
      }
    })();
  }, []);

  useEffect(() => {
    const playlist = convertToPlaylist(allLecture);
    setPlaylist(playlist);
  }, [allLecture]);

  return { playlist, isLoading };
};

export default usePlaylist;
