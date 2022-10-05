import { HttpAppError } from '@src/@types/globals';
import { documentMessages } from '@src/document';
import { acceptPendingProducer } from '@src/services';
import { endpoints } from '@src/services/config/endpoints';
import { useToastStore } from '@src/store';
import { AcceptPendingProducerResponse } from '@src/types';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

const showToast = useToastStore.getState().show;

type UseAcceptPendingProducer = () => UseMutationResult<
  AcceptPendingProducerResponse,
  HttpAppError,
  string
>;

export const useAcceptPendingProducerMutation: UseAcceptPendingProducer = () => {
  const queryClient = useQueryClient();

  return useMutation<AcceptPendingProducerResponse, HttpAppError, string>(
    (id) => acceptPendingProducer(id),
    {
      onSuccess: (response) => {
        showToast({ message: documentMessages.producer.pending.on_accept, type: 'success' });

        queryClient.invalidateQueries(endpoints.producer.PENDING);
        queryClient.invalidateQueries(`${endpoints.producer.PENDING}/${response.id}`);
      },
      onError: (error) => {
        showToast({ message: error.message, type: 'error' });
      },
    },
  );
};
