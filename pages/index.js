import Head from 'next/head';
import Hero from '../components/Hero';
import Photos from '../components/Photos';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading="Hey I'm Ninad" message='I like to capture frames of life and of course nature as well.' />

      <Photos/>
    </div>
  );
}
