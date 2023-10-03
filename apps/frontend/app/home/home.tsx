import Image from "next/image";
import Link from "next/link";
import { ShareIcon } from "../icons";
import styles from "./home.module.css";

{
    /*CHENEDU I GET  THIS ERROR WHILE TRYING TO USE THE IMPORT FILE METHOD
* <You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders> (Source code omitted for this binary file)
*/}
// import no_setup_video from "./assets/nosetup.mp4"


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
            Start coding instantly without worrying about the configuration.
            <span> Our sandboxes have everything you need: dev servers, unit tests, Storybook and other devtools.</span>
          </p>
          <div>

            <video width="100%" height="100%" muted>
              {/* <source src="" type="video/webm" /> */}
              {/* Video Not playing */}
              <source src="./assets/nosetup.mp4" type="video/mp4" />
              {/*  Couldnt use it cause of the error*/}
              {/* <source src={no_setup_video} type="video/mp4" /> */}
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
