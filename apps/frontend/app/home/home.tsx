import Image from "next/image";
import Link from "next/link";
import { ShareIcon } from "../icons";
import styles from "./home.module.css";

export function Home(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <nav>
           <div className={styles.navOne}>
            <Link href="/">
            <Image alt="logo" height={24} src="/logo.svg" width={24} />
          </Link>
            <Link href="#">Features</Link>
            <Link href="#">Use Cases</Link>
            <Link href="#">iOs</Link>
            <Link href="#">Discover</Link>
            <Link href="#">Docs</Link>
            <Link href="#">Support</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Pricing</Link>
          </div>
          <div className={styles.navTwo}>
          <Link href="#">Sign in</Link>
          <Link href="#"><button type="submit">Try for free</button></Link>
          </div>
      
        </nav>
        <nav>
          <div className={styles.navThree}>
            <Link href="#"><button type="submit">New</button>Meet Boxy, your new AI coding assistant. Available to pro subscribers.</Link>
          </div>
          <div className={styles.navFour}><Link href="#">Learn more</Link></div>
        </nav>
      
      </header>

      <main>
        <section className={styles.noSetup}>
          {/* TODO: Add no setup content here. The first bit of content has been set up for you. */}
          <h2>
            No setup. <span>One click and start coding.</span>
          </h2>
          <p>
            Start coding instantly without worrying about the configuration. Our
            sandboxes have everything you need: dev servers, unit tests,
            Storybook and other devtools.
          </p>
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
