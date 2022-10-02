import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../lib/RelayEnvironment';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
