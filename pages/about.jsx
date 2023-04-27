import Head from 'next/head';

import Func from '@/Component/Func';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Func />
      <div>This is about Component</div>
    </>
  );
};

export default About;
