import { useEffect } from 'react';
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
  const [allLecture, setAllLecture] = useRecoilState(allLectureAtom);
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  useEffect(() => {
    (async () => {
      let data: LectureRoomSingleData[];

      if (Config().mode === 'development') {
        setTimeout(async () => {
          data = await callPlaylistApi();
          setAllLecture(() => data);
        }, 500);
      } else {
        data = await callPlaylistApi();
        setAllLecture(() => data);
      }
    })();
  }, []);

  useEffect(() => {
    const playlist = convertToPlaylist(allLecture);
    setPlaylist(playlist);
  }, [allLecture]);

  return playlist;
};

export default usePlaylist;
