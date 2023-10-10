import Image from "next/image";
import Link from "next/link";
import { ShareIcon } from "../icons";
import styles from "./home.module.css";



export function Home(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        {/* TODO: Add header content here. The first bit of content has been set up for you.  */}
        <nav>
          <Link href="/">
            <Image alt="logo" height={24} src="/logo.svg" width={24} />
          </Link>

          <Link href="#">Sign in</Link>
          <Link href="#">Try for free</Link>
        </nav>
      </header>

      <main>
        <section className={styles.noSetup}>
          <div className={styles.info}>
            <h2>
              No setup. <span>One click and start coding.</span>
            </h2>
            <p>
              Start coding instantly without worrying about the configuration.
              <span className={styles.infoNote}> Our sandboxes have everything you need: dev servers, unit tests, Storybook and other devtools.</span>
            </p>
          </div>
          <div className={styles.noSetupVideo}>
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
