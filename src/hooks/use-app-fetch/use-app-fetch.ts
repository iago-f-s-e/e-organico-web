import { useState } from 'react';
import { httpGET } from '../../services/http-client';

type UseAppFetch<T> = {
  data: T;
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

  const handleCall = (url: string) => {
    httpGET<T>(url)
      .then((res) => setData(res))
      .catch(() => setData(initialState))
      .finally(() => setFetchIsLoading(false));
  };

  const call = (url: string) => {
    setFetchIsLoading(true);

    if (!config?.refetchInterval) return handleCall(url);

    const interval = setInterval(() => handleCall(url), config?.refetchInterval);

    setIntervalId(interval);
  };

  const fire = () => {
    if (intervalId) clearInterval(intervalId);
  };

  return { fetchIsLoading, data, call, fire };
};