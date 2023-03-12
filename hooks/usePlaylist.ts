import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { convertToPlaylist, playlistAtom } from '../store/lecture';
import { callPlaylistApi } from '../pages/api/lecture';

const usePlaylist = () => {
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  useEffect(() => {
    (async () => {
      const data = await callPlaylistApi();
      const playlist = convertToPlaylist(data);
      setPlaylist(playlist);
    })();
  }, []);

  return playlist;
};

export default usePlaylist;
