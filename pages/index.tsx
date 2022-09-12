import type { NextPage } from 'next';
import Head from 'next/head';

import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';
import { Divider } from '@/components/UI/.';

const Home: NextPage = () => {
  return (
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
        <Divider label="Test" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi est
          consequuntur, perferendis incidunt nihil laudantium exercitationem itaque velit dicta
          voluptates id ipsum non quod dolore vitae voluptatem! Fuga, ducimus.
        </p>
      </div>
    </>
  );
};

export default Home;
