import { useEffect, useState } from 'react';
import { isDevMode } from '../config/config.export';
import { callGetApi } from '../pages/api/axios';
import { sleep } from '../utils/time';

type FetchHook = (
  url: string,
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT',
) => { isLoading: boolean; data: any; error: any };

const useFetch: FetchHook = (url, method) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('{}');

  useEffect(() => {
    (async () => {
      const callApi = async () => {
        const fetchData = await callGetApi(url);

        if (fetchData instanceof Error) {
          setError(JSON.stringify(fetchData));
          return;
        }

        setData(fetchData);
        setIsLoading(false);
      };

      if (isDevMode) {
        await sleep(500);
        callApi();
      } else {
        callApi();
      }
    })();
  }, []);

  return { isLoading, data, error: JSON.parse(error) };
};

export default useFetch;
