import type { AppProps } from 'next/app';
import MainLayout from '@container/main-layout/main-layout';
import { Provider } from 'react-redux';
import store from '@redux/store';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
