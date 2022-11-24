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
          Welcome to <Link href="/">React Query Apps!</Link>
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

          <Link href="/dependent-queries" className={styles.card}>
            <h2>Dependent Queries &rarr;</h2>
            <p>ui.dev - (Lesson) Dependent Queries</p>
          </Link>

          <Link href="/deferred-queries" className={styles.card}>
            <h2>Deferred Queries &rarr;</h2>
            <p>ui.dev - (Lesson) Deferred Queries</p>
          </Link>

          <Link href="/querying-filtered-data-practice" className={styles.card}>
            <h2>Querying Filtered Data &rarr;</h2>
            <p>ui.dev - (Practice)</p>
          </Link>

          <Link href="/search-queries-practice" className={styles.card}>
            <h2>Search Queries &rarr;</h2>
            <p>ui.dev - (Practice) Search for issues</p>
          </Link>

          <Link href="/cache-states-rq-devtools" className={styles.card}>
            <h2>Cache States &rarr;</h2>
            <p>ui.dev - React Query DevTools</p>
          </Link>

          <Link href="/error-retries" className={styles.card}>
            <h2>Error Retries &rarr;</h2>
            <p>ui.dev - Handling Errors in React Query</p>
          </Link>

          <Link href="/when-to-check-errors" className={styles.card}>
            <h2>When to Check Errors &rarr;</h2>
            <p>ui.dev - Handling Errors</p>
          </Link>

          <Link href="/error-handling-practice" className={styles.card}>
            <h2>Error Handling &rarr;</h2>
            <p>ui.dev - (Practice) Error Component</p>
          </Link>

          <Link href="/manual-query-invalidation" className={styles.card}>
            <h2>Manual Query Invalidation &rarr;</h2>
            <p>ui.dev - useQueryClient</p>
          </Link>

          <Link href="/manual-query-invalidation-practice" className={styles.card}>
            <h2>Manual Query Invalidation &rarr;</h2>
            <p>ui.dev - (Practice) Invalidate</p>
          </Link>

          <Link href="/query-filters-practice" className={styles.card}>
            <h2>Query Filters &rarr;</h2>
            <p>ui.dev - (Practice) Invalidate corresponding Queries</p>
          </Link>

          <Link href="/query-cancellation" className={styles.card}>
            <h2>Query Cancellation &rarr;</h2>
            <p>ui.dev - queryClient.cancelQueries</p>
          </Link>

          <Link href="/strapi-blog" className={styles.card}>
            <h2>Strapi Blog &rarr;</h2>
            <p>Personal Practice using React Query</p>
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
