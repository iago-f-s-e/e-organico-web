import create from 'zustand';

import { ToastStore, UseToastStore } from './use-toast-types';

const initialState: ToastStore = {
  state: 'hidden',
  message: '',
  type: 'notification',
  duration: 4000,
};

export const useToastStore = create<UseToastStore>((set) => ({
  toast: initialState,
  hide: () => set((state) => ({ toast: { ...state.toast, state: 'hiding' } })),
  hidden: () => set((state) => ({ toast: { ...state.toast, state: 'hidden' } })),
  show: (toast) =>
    set(() => ({ toast: { ...toast, duration: toast.duration ?? 4000, state: 'showing' } })),
}));
