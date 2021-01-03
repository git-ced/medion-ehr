/**
 * Prince Neil Cedrick S. Castro - Medion EHR
 *
 * NOTE: To whomever shall follow our work, behold our art.
 * This software was Made & Crafted with love.
 * She was written to read like poetry.
 * Treat her well.
 * And when you touch this source code,
 * leave your signature below to show that you were part of its legacy.
 *
 * @author Prince Neil Cedrick Castro
 */
require('dotenv').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');

function pipe(value) {
  return (...transform) => transform.reduce((acc, x) => x(acc), value);
}

function withESBuild(nextConfig) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // Replaces terser
      if (options.dev) {
        config.plugins.push(new ESBuildPlugin());

        config.optimization.minimizer[0] = new ESBuildMinifyPlugin({
          target: options.isServer ? 'es2017' : 'es2015',
          minify: false,
        });
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    }
  });
}

function withCustomChunk(nextConfig) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.dev && !options.isServer) {
        config.optimization.splitChunks.chunks = 'initial';
      }
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    }
  });
}

const INITIAL_CONFIG = {
  DB_ENV: process.env.DB_ENV,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  S3_ACL: process.env.S3_ACL,
  S3_REGION: process.env.S3_REGION,
  S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  UPLOADCARE_PUBLIC_KEY: process.env.UPLOADCARE_PUBLIC_KEY,
  RSA_PUBLIC_KEY: process.env.RSA_PUBLIC_KEY,
  RSA_PRIVATE_KEY: process.env.RSA_PRIVATE_KEY,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY_PRODUCTION,
  API: process.env.API,
  HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
};

const initialConfig = {
  env: INITIAL_CONFIG,
  experimental: {
    productionBrowserSourceMaps: true,
    babelMultiThread: process.env.ENABLE_PARALLEL_BUILD,
    // modern: true,
    // reactMode: 'concurrent',
  },
  distDir: 'build',
  images: {
    domains: [
      'ucarecdn.com'
    ],
    deviceSizes: [320, 480, 576, 768, 992, 1200, 1920],
  },
};

module.exports = pipe(initialConfig)(
  withCustomChunk,
  withESBuild,
  withBundleAnalyzer,
);
