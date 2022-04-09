import Head from 'next/head'
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Finding App</title>
        <meta name="description" content="Food Finding App, to find restrurant and their available food collection." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="test">Hello Nahid</div>
      <Header />
    </div>
  );
}
