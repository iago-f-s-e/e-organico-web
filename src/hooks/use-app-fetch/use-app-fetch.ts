import { useState, useCallback } from 'react';
import { httpGET } from '@src/services/http-client';

type UseAppFetch<T> = {
  data: T;
  mutate: (fn: () => T) => void;
  call: (url: string) => void;
  fire: () => void;
  fetchIsLoading: boolean;
};

type Config = {
  onError?: () => void;
  refetchInterval?: number;
};

export const useAppFetch = <T>(initialState: T, config?: Config): UseAppFetch<T> => {
  const [fetchIsLoading, setFetchIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>(initialState);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const handleCall = useCallback(
    (url: string) => {
      httpGET<T>(url)
        .then((res) => setData(res))
        .catch(() => setData(initialState))
        .finally(() => setFetchIsLoading(false));
    },
    [initialState],
  );

  const call = useCallback(
    (url: string) => {
      setFetchIsLoading(true);

      if (!config?.refetchInterval) return handleCall(url);

      const interval = setInterval(() => handleCall(url), config?.refetchInterval);

      setIntervalId(interval);
    },
    [handleCall, config?.refetchInterval],
  );

  const fire = () => {
    if (intervalId) clearInterval(intervalId);
  };

  const mutate = (fn: () => T) => {
    setData(fn());
  };

  return { fetchIsLoading, data, call, fire, mutate };
};
