import type { NextPage } from 'next';
import Head from 'next/head';

import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';

const Home: NextPage = () => (
  <>
    <Head>
      <title>CodeImage</title>
      <meta name="description" content="Create beautiful images of your source code " />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ThemeChanger />
    <hr />
    <h1>CodeImage</h1>
  </>
);

export default Home;
