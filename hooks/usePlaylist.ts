import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { allLectureAtom, convertToPlaylist, playlistAtom } from 'store/lecture';

function usePlaylist() {
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  const allLecture = useRecoilValue(allLectureAtom);

  useEffect(() => {
    if (allLecture.length) {
      const playlist = convertToPlaylist(allLecture);
      setPlaylist(playlist);
    }
  }, [allLecture, setPlaylist]);

  return playlist;
}

export default usePlaylist;
