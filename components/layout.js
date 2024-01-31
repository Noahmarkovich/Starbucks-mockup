import Head from "next/head";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Starbucks mockup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
