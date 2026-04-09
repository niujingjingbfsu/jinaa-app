import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import { withAxiom } from "next-axiom";

const nextConfig: NextConfig = {
  transpilePackages: ["@jinaa/shared"],
};

const withSentry = withSentryConfig(nextConfig, {
  silent: true,
  org: process.env["SENTRY_ORG"],
  project: process.env["SENTRY_PROJECT"],
  authToken: process.env["SENTRY_AUTH_TOKEN"],
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
});

export default withAxiom(withSentry);
