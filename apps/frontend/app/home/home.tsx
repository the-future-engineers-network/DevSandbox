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
