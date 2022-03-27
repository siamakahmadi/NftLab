import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/index'
import Button from './Components/Button/index'

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

        <div className={styles.heroSection}>
            <div className={styles.leftSection}>
              <div className={styles.title}>Extraordinary <span>NFT</span> youll love</div>
              <div className={styles.info}>We believe you have a unique taste, discover the endless possibilities of the NFT world</div>
              <div className={styles.buttonContainer}>
              <Button title="Explore Now" actuveBorder={true}/>
              <Button title="Explore Now" actuveBorder={false}/>
              </div>
            </div>
            <div className={styles.heroImage}>
            </div>
        </div>

        <div className={styles.cardSection}>
          <Card />
        </div>

      </main>

    </div>
  )
}
