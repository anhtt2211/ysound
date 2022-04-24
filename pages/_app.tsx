import type { AppProps } from 'next/app';
import MainLayout from '@container/main-layout/main-layout';
import { Provider } from 'react-redux';
import store from '@redux/store';
import '@styles/globals.css';
import AppProvider from '@app/app-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider>
        <MainLayout className="bg-black">
          <Component {...pageProps} />
        </MainLayout>
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
