import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar/Navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NftLab</title>
        <meta name="description" content="Nftlab the Minimal Nft MarketPlace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Navbar/>

      </main>

    </div>
  )
}
