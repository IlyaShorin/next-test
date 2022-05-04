import { createContext } from 'react';
import { rootStore } from '../store';

export const RootStoreContext = createContext(rootStore);
export const RootStoreContextProvider = RootStoreContext.Provider;
