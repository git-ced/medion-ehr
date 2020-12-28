// ANCHOR Components
import NotFoundPage from './404';

interface CustomErrorProps {
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  err?: Error | null;
}

// eslint-disable-next-line import/no-default-export
export default function ErrorPage(
  { statusCode, hasGetInitialPropsRun, err }: CustomErrorProps,
) {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    // eslint-disable-next-line no-console
    console.error(err);
  }

  if (statusCode !== 404) {
    return <NotFoundPage />;
  }

  return <p>{`Error Occured - ${statusCode}`}</p>;
}
