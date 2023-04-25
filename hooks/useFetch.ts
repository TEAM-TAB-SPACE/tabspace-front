import { useEffect, useMemo, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { getCookie } from 'cookies-next';

import { isDevMode } from 'config/config.export';

import {
  callGetApi,
  callDeleteApi,
  axiosInstance,
  setAxiosAccessToken,
  callPostApi,
  callPutApi,
  setAxiosInterCeptors,
} from 'pages/api/axios';

import { sleep } from 'utils/time';

export type RefetchKey = 'stale' | 'fresh';

export type ApiCall = (url: string, payload: any) => Promise<any>;

interface FetchParams {
  url?: string;
  payload?: any;
  refetchKey?: {
    key: RefetchKey;
    setter: SetterOrUpdater<RefetchKey>;
  };
}

function useFetch(params: FetchParams = {}) {
  const { url, payload, refetchKey } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('{}');

  const token = getCookie('access');
  const axios = axiosInstance;

  if (typeof token === 'string' && token) setAxiosAccessToken(axios, token);
  setAxiosInterCeptors(axios);

  const client = useMemo(() => {
    return {
      get: callGetApi(axios),
      post: callPostApi(axios),
      put: callPutApi(axios),
      delete: callDeleteApi(axios),
    };
  }, [axios]);

  useEffect(() => {
    (async () => {
      const callApi = async (endPoint: string) => {
        const fetchData = await client.get(endPoint, payload);

        if (fetchData instanceof Error) {
          setError(JSON.stringify(fetchData));
          return;
        }

        setData(fetchData);
        setIsLoading(false);
        refetchKey?.key && refetchKey.setter(() => 'fresh');
      };
      if (refetchKey?.key !== 'fresh' && url) {
        if (isDevMode) {
          await sleep(500);
          callApi(url);
        } else {
          callApi(url);
        }
      }
    })();
  }, [client, payload, refetchKey, url]);

  return {
    isLoading,
    data,
    error: JSON.parse(error),
    ...client,
  };
}

export default useFetch;
