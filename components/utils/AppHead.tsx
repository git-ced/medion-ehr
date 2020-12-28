// ANCHOR Next
import Head from 'next/head';

export interface IOpenGraphProps {
  url: string;
  image: string;
  width: string;
  height: string;
}

export interface IProps {
  title: string;
  description: string;
  openGraph?: IOpenGraphProps;
}

export function AppHead({ title, description, openGraph }: IProps) {
  return (
    <Head>
      {/* Viewport for responsive web design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      {/* Document Title */}
      <title>{title}</title>
      {/* Meta Description */}
      <meta name="description" content={description} />
      <meta name="theme-color" content="#002855" />
      {
        openGraph && (
          <>
            <meta property="og:type" content="website" />
            <meta property="og:url" content={openGraph.url} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={openGraph.image} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Medion" />
            <meta property="og:locale" content="en_PH" />
            <meta property="og:image:width" content={openGraph.width} />
            <meta property="og:image:height" content={openGraph.height} />
          </>
        )
      }
    </Head>
  );
}
