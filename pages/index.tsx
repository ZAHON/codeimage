import type { NextPage } from 'next';
import Head from 'next/head';

import { PackgeExport } from 'tabler-icons-react';

import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';
import { Button } from '@/components/UI/.';

const Home: NextPage = () => (
  <>
    <Head>
      <title>CodeImage</title>
      <meta name="description" content="Create beautiful images of your source code" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: '1rem',
      }}
    >
      <ThemeChanger />
      <h1>CodeImage</h1>
      <Button icon={<PackgeExport size={16} />} onClick={() => alert('Clicked Button')}>
        Button
      </Button>
    </div>
  </>
);

export default Home;
