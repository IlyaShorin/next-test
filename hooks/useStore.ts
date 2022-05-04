import { useContext } from 'react';
import { RootStoreContext } from '../context';

export const useStores = () => {
  return useContext(RootStoreContext);
};
