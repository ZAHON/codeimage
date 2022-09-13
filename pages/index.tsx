import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';
import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';
import { Collapse, Switch } from '@/components/UI/.';

const Home: NextPage = () => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(true);

  return (
    <>
      <Head>
        <title>CodeImage</title>
        <meta name="description" content="Create beautiful images of your source code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeChanger />
      <Switch id="test" checked={isCollapseOpen} onChange={setIsCollapseOpen} />
      <Collapse isOpened={isCollapseOpen}>
        <div style={{ height: '500px', width: '100%', backgroundColor: 'var(--color-primary)' }} />
      </Collapse>
    </>
  );
};

export default Home;
