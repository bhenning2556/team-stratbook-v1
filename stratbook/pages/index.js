import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Overpass from './maps/overpass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stratbook v0.1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>

      <Overpass />

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
