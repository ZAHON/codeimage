import type { NextPage } from 'next';
import Head from 'next/head';

import { AppShell } from '@/components/AppShell/AppShell';

const Home: NextPage = () => (
  <>
    <Head>
      <title>CodeImage</title>
      <meta name="description" content="Create beautiful images of your source code" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppShell />
  </>
);
export default Home;
