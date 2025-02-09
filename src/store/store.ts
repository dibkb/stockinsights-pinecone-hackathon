import { create } from 'zustand';
import { apiResponse } from '../types/type';

const useApiStore = create((set) => ({
  apiResponse: null,
  setApiResponse: (response: apiResponse) =>
    set(() => ({ apiResponse: response })),
}));

export default useApiStore;
