import Image from "next/image";
import Link from "next/link";
import { ShareIcon, ChevronRight } from "../icons";
import styles from "./home.module.css";



export function Home(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.mainNav}>
          <div className={styles.navOne}>
            <Link href="/">
              <Image alt="logo" height={24} src="/logo.svg" width={24} />
            </Link>
            <Link href="#">DevSandbox</Link>
          </div>
          <div className={styles.navTwo}>
            <Link href="#">Sign in</Link>
            <Link href="#">
              <button type="submit">Try for free</button>
            </Link>
          </div>
        </nav>
        <div className={styles.largeHeader}>
          <h1>Code in</h1>
          <h1>Sandboxes</h1>
        </div>
        <div className={styles.smallHeader}>
          <p>Prototype your ideas with shareable</p>
          <p>and secure cloud sandboxes.</p>
        </div>
        <div className={styles.navThree}>
          <Link href="#">Create sandbox </Link>
          <Link href="#">
            <ChevronRight />
          </Link>
        </div>
        <div className={styles.videoContainer}>
          <video width="90%" height="100%" autoPlay loop muted>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </header>

      <main>
        <section className={styles.noSetup}>
          <div className={styles.info}>
            <h2>
              No setup. <span className={styles.infoNestedHeader}>One click and start coding.</span>
            </h2>
            <p>
              Start coding instantly without worrying about the configuration.
              <span className={styles.infoNote}> Our sandboxes have everything you need: dev servers, unit tests, Storybook and other devtools.</span>
            </p>
          </div>
          <div className={styles.noSetupVideoContainer}>
            <video width="100%" height="100%" muted autoPlay loop>
              <source src="/nosetup.mp4" type="video/mp4" />
            </video>

          </div>
        </section>

        <section className={styles.shareableUrls}>
          {/* TODO: Add shareableURls content here. The first bit of content has been set up for you. */}
          <ShareIcon height={24} width={24} />
          <p>Shareable URLs</p>
          <h2>Get instant feedback, the easy way</h2>
        </section>
      </main>
    </>
  );
}
