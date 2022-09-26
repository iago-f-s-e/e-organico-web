type ToastType = 'success' | 'warning' | 'error' | 'notification';
type ToastState = 'showing' | 'hiding' | 'hidden';

export type ToastStore = {
  message: string;
  type: ToastType;
  state: ToastState;
  duration?: number;
};

export type UseToastStore = {
  toast: ToastStore;
  show: (toast: Omit<ToastStore, 'state'>) => void;
  hide: () => void;
  hidden: () => void;
};
