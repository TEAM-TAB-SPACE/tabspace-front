import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isDevMode } from '../config/config.export';
import { callTodayLecturesApi } from '../pages/api/dashboard';
import { todayLecturesAtom } from '../store/dashboard';
import { sleep } from '../utils/time';

const useTodayLectures = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todayLectures, setTodayLectures] = useRecoilState(todayLecturesAtom);

  useEffect(() => {
    (async () => {
      const getTodayLectures = async () => {
        const data = await callTodayLecturesApi();

        if (data instanceof Error) return;

        setTodayLectures(data);
        setIsLoading(false);
      };

      if (isDevMode) {
        await sleep(500);
        getTodayLectures();
      } else {
        getTodayLectures();
      }
    })();
  }, []);

  return { todayLectures, isLoading };
};

export default useTodayLectures;
