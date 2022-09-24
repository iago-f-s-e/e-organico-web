import { useCallback, useState } from 'react';
import * as client from '@src/services/http-client';
import {
  RequisitionTypeOptionalData,
  RequisitionTypeRequiredData,
  RequisitionType,
  Config,
  UseAppPush,
} from './use-app-push-types';

export const useAppPush = (): UseAppPush => {
  const [pushIsLoading, setPushIsLoading] = useState<boolean>(false);

  const handleOnSuccess = <Res>(res: Res, onSuccess?: Config<Res>['onSuccess']) => {
    if (!onSuccess) return;

    onSuccess(res);
  };

  const handleConfig = useCallback(<Res>(res: Res, config?: Config<Res>): void => {
    if (config) handleOnSuccess(res, config.onSuccess);
  }, []);

  const handleCallPost = useCallback(
    <Req, Res = Req>(url: string, data: Req, config?: Config<Res>) => {
      client
        .httpPOST<Req, Res>(url, data)
        .then((res) => handleConfig(res, config))
        .finally(() => setPushIsLoading(false));
    },
    [handleConfig],
  );

  const handleCallPut = useCallback(
    <Req, Res = Req>(url: string, data: Req, config?: Config<Res>) => {
      client
        .httpPUT<Req, Res>(url, data)
        .then((res) => handleConfig(res, config))
        .finally(() => setPushIsLoading(false));
    },
    [handleConfig],
  );

  const handleCallPatch = useCallback(
    <Req, Res = Req>(url: string, data: Req, config?: Config<Res>) => {
      client
        .httpPATCH<Req, Res>(url, data)
        .then((res) => handleConfig(res, config))
        .finally(() => setPushIsLoading(false));
    },
    [handleConfig],
  );

  const handleCallDelete = useCallback(
    <Req, Res = Req>(url: string, data: Req, config?: Config<Res>) => {
      client
        .httpPATCH<Req, Res>(url, data)
        .then((res) => handleConfig(res, config))
        .finally(() => setPushIsLoading(false));
    },
    [handleConfig],
  );

  function call<Req, Res = Req>(
    url: string,
    type: RequisitionTypeRequiredData,
    data: Req,
    config?: Config<Res>,
  ): void;

  function call<Req, Res = Req>(
    url: string,
    type: RequisitionTypeOptionalData,
    data?: Req,
    config?: Config<Res>,
  ): void;

  function call<Req, Res = Req>(
    url: string,
    type: RequisitionType,
    data?: Req,
    config?: Config<Res>,
  ): void {
    setPushIsLoading(true);

    switch (type) {
      case 'post':
        handleCallPost(url, data, config);
        break;

      case 'put':
        handleCallPut(url, data, config);
        break;

      case 'patch':
        handleCallPatch(url, data, config);
        break;

      case 'delete':
        handleCallDelete(url, data, config);
        break;

      default:
        break;
    }
  }

  return { call, pushIsLoading };
};
