import Head from 'next/head';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Buy dance classes</title>
        <meta
          name="description"
          content="A simple web application to buy private dance classes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-10">{children}</main>
    </>
  );
}
