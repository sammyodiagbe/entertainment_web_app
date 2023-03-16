import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Search from "../components/search-container";
import TrendingList from "../components/ui-components/trendingList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Search />

      <main className="main-content">
        <TrendingList />
      </main>
    </>
  );
}
