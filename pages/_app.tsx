import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { rootStore } from '../store';
import { RootStoreContextProvider } from '../context';
import dynamic from 'next/dynamic';
import '../components/Content.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreContextProvider value={rootStore}>
      <Component {...pageProps} />
    </RootStoreContextProvider>
  );
}
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
