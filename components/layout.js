import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Starbucks mockup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
