import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sattar Ahmadi — Create, Share, Build</title>
        <meta name="description" content="Sattar Ahmadi — developer portfolio and blog." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.hero}>
        <div className={styles.container}>
          <header className={styles.nav}>
            <div className={styles.logo}>Sattar<span className={styles.accent}>.</span></div>
            <nav className={styles.navLinks}>
              <a href="#work">Work</a>
              <a href="#blog">Blog</a>
              <a href="#contact" className={styles.cta}>Contact</a>
            </nav>
          </header>

          <section className={styles.heroContent}>
            <h1>Beautiful & simple web experiences</h1>
            <p className={styles.lead}>I build thoughtful, fast, and accessible websites & apps. Welcome — take a look around.</p>
            <p className={styles.actions}>
              <a href="#work" className={`${styles.btn} ${styles.primary}`}>See my work</a>
              <a href="#contact" className={`${styles.btn} ${styles.ghost}`}>Get in touch</a>
            </p>
          </section>

          <section id="work" className={styles.cards}>
            <article className={styles.card}>
              <h3>Fast by design</h3>
              <p>Performance-focused front-end development using modern toolchains.</p>
            </article>
            <article className={styles.card}>
              <h3>Readable code</h3>
              <p>Clean TypeScript + tests so projects are easy to maintain and scale.</p>
            </article>
            <article className={styles.card}>
              <h3>Meaningful content</h3>
              <p>Accessible UI and clear copy that helps users complete their goals.</p>
            </article>
          </section>

          <footer id="contact" className={styles.footer}>
            <p>Made with ❤️ by Sattar Ahmadi</p>
            <p className={styles.small}>• <a href="#">GitHub</a> • <a href="#">Twitter</a> • <a href="mailto:hello@example.com">Email</a></p>
          </footer>
        </div>
      </main>
    </>
  )
}
