import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  allLectureAtom,
  convertToPlaylist,
  LectureRoomSingleData,
  playlistAtom,
} from '../store/lecture';
import { callPlaylistApi } from '../pages/api/lecture';
import Config from '../config/config.export';

const usePlaylist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allLecture, setAllLecture] = useRecoilState(allLectureAtom);
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  useEffect(() => {
    (async () => {
      const getLectureroomData = async () => {
        const data: LectureRoomSingleData[] = await callPlaylistApi();
        setAllLecture(() => data);
        setIsLoading(false);
      };

      if (Config().mode === 'development') {
        setTimeout(async () => {
          getLectureroomData();
        }, 500);
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
