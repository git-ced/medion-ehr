// ANCHOR Next
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html,
} from 'next/document';

// ANCHOR Geist
import { CssBaseline } from '@geist-ui/react';

class MedionDocument extends Document<DocumentContext> {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  }

  public render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async defer src="https://meet.jit.si/external_api.js" />
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default MedionDocument;
