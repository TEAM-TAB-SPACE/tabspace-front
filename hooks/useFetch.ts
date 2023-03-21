import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { isDevMode } from '../config/config.export';
import { callGetApi, callDeleteApi } from '../pages/api/axios';
import { sleep } from '../utils/time';

export type RefetchKey = 'stale' | 'fresh';

type FetchHook = (
  url?: string,
  payload?: any,
  refetchKeyAtom?: RecoilState<RefetchKey>,
) => {
  isLoading: boolean;
  data: any;
  error: any;
  get: (url: string, payload: any) => Promise<any>;
  delete: (url: string, payload: any) => Promise<any>;
};

const useFetch: FetchHook = (url, payload, refetchKeyAtom) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('{}');

  const [refetchKey, setRefetchKey] = refetchKeyAtom
    ? useRecoilState<RefetchKey>(refetchKeyAtom)
    : [];

  useEffect(
    () => {
      (async () => {
        const callApi = async (endPoint: string) => {
          const fetchData = await callGetApi(endPoint, payload);

          if (fetchData instanceof Error) {
            setError(JSON.stringify(fetchData));
            return;
          }

          setData(fetchData);
          setIsLoading(false);
          setRefetchKey && setRefetchKey('fresh');
        };

        if (refetchKey !== 'fresh' && url) {
          if (isDevMode) {
            await sleep(500);
            callApi(url);
          } else {
            callApi(url);
          }
        }
      })();
    },
    refetchKey ? [refetchKey] : [],
  );

  return {
    isLoading,
    data,
    error: JSON.parse(error),
    get: callGetApi,
    delete: callDeleteApi,
  };
};

export default useFetch;
