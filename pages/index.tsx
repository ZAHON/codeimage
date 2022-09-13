import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';
import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';
import { Stack, Slider, Label, Switch } from '@/components/UI/.';

const Home: NextPage = () => {
  const [value, setValue] = useState(20);

  return (
    <>
      <Head>
        <title>CodeImage</title>
        <meta name="description" content="Create beautiful images of your source code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ padding: '10px' }}>
        <Stack>
          <ThemeChanger />
          <Label htmlFor="test-slider">Test Slider</Label>
          <Slider id="test-slider" value={value} onChange={setValue} ariaLabel="..." />
          <Switch disabled id="..." checked={true} onChange={() => console.log()} />
        </Stack>
      </div>
    </>
  );
};

export default Home;
