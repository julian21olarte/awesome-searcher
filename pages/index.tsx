import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.sass'
import LangsSearchInput from 'components/LangsSearchInput'
import FrameworksSearchInput from 'components/FrameworksSearchInput'
import SuperherosSearchInput from 'components/SuperherosSearchInput'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Searcher</title>
        <meta name="description" content="A new Awesome Searcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Awesome Searcher!
        </h1>

        <p className={styles.description}>
          Get started by typing in one of our searchers...
        </p>

        <div className={styles.searchers}>
          <LangsSearchInput />
          <FrameworksSearchInput />
          <SuperherosSearchInput />
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://boatyardx.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ height: '1em' }}>Powered by{' '}</span>
          <span className={styles.logo}>
            <Image src="/byx-logo.svg" alt="BoatyardX Logo" width={72} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
