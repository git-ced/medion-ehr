// ANCHOR Next
import App, { AppContext } from 'next/app';

// ANCHOR Next User Agent
import { useUserAgent as parseUserAgent, UserAgent } from 'next-useragent';

// ANCHOR Models
import { GraphDomain } from 'react-graph-state';

// ANCHOR Components
import { GlobalProvider } from '@medion/components/utils/GlobalProvider';

interface AppProps {
  userAgent: UserAgent;
  err?: Error;
}

// eslint-disable-next-line import/no-default-export
export default class MedionApp extends App<AppProps> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  public static async getInitialProps(appContext: AppContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const userAgent = parseUserAgent(appContext.ctx.req?.headers['user-agent'] ?? '');

    return { ...appProps, userAgent };
  }

  public render() {
    const {
      Component, pageProps, userAgent,
    } = this.props;

    return (
      <GraphDomain>
        <GlobalProvider userAgent={userAgent}>
          <Component {...pageProps} />
        </GlobalProvider>
      </GraphDomain>
    );
  }
}
