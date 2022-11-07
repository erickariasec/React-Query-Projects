import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">React Query Apps!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/github-stats" className={styles.card}>
            <h2>Github Stats &rarr;</h2>
            <p>React Query in its most basic and simple form</p>
          </Link>

          <Link href="/fake-store" className={styles.card}>
            <h2>Fake Store &rarr;</h2>
            <p>Consume easily Fake Store API</p>
          </Link>

          <Link href="/labels-practice" className={styles.card}>
            <h2>Labels Practice &rarr;</h2>
            <p>ui.dev - (Practice) Index Query</p>
          </Link>

          <Link href="/individual-records-practice" className={styles.card}>
            <h2>Individual Records &rarr;</h2>
            <p>ui.dev - (Practice) Fetching single user record</p>
          </Link>

          <Link href="/parallel-queries" className={styles.card}>
            <h2>Parallel Queries &rarr;</h2>
            <p>ui.dev - (Lesson) Parallel Queries</p>
          </Link>

          <Link href="/parallel-queries-combine-promise-all" className={styles.card}>
            <h2>Parallel Queries &rarr;</h2>
            <p>ui.dev - (Lesson) Combine - Promise.all</p>
          </Link>

          <Link href="/parallel-queries-useQueries" className={styles.card}>
            <h2>Parallel Queries &rarr;</h2>
            <p>ui.dev - (Lesson) useQueries</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
