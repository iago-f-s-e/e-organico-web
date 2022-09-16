export type RequisitionTypeRequiredData = 'post' | 'put';

export type RequisitionTypeOptionalData = 'patch' | 'delete';

export type RequisitionType = RequisitionTypeRequiredData | RequisitionTypeOptionalData;

export type Config<T> = {
  onSuccess?: (data: T) => void;
};

export type UseAppPush = {
  pushIsLoading: boolean;
  call: {
    <Req, Res = Req>(
      url: string,
      type: RequisitionTypeRequiredData,
      data: Req,
      config?: Config<Res> | undefined,
    ): void;
    <Req, Res = Req>(
      url: string,
      type: RequisitionTypeOptionalData,
      data?: Req | undefined,
      config?: Config<Res> | undefined,
    ): void;
  };
};
