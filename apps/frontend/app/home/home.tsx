import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShareIcon, GroupIcon, LinkIcon, ClickIcon } from "../icons";
import styles from "./home.module.css";


export function Home(): JSX.Element {
  interface ProgressBar {
    value: number,
    active: boolean,
    id: string
  }

  const sharableImages = ['https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshareurl.893368b4.png&w=3840&q=90',
    'https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontext.8f168907.png&w=3840&q=90',
    'https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomment.88e38d48.png&w=3840&q=90']
  const [currentImage, setCurrentImage] = useState({
    className: 'trim',
    src: sharableImages[0]
  });
  const [progressBar1, setprogressBar1] = useState<ProgressBar>({
    value: 0,
    active: true,
    id: 'active'
  });
  const [progressBar2, setprogressBar2] = useState<ProgressBar>({
    value: 0,
    active: false,
    id: 'inactive'
  });
  const [progressBar3, setprogressBar3] = useState<ProgressBar>({
    value: 0,
    active: false,
    id: 'inactive'
  });

  function handleProgressBars(): void {
    if (progressBar1.value <= 100 && progressBar1.active) {
      setprogressBar1({ ...progressBar1, value: progressBar1.value + 0.5 });
    }
    else {
      setprogressBar1({ ...progressBar1, value: 0, active: false });
      setprogressBar2({ ...progressBar2, active: true });
    }
    if (progressBar1.active) {
      return;
    }
    if (progressBar2.value <= 100 && progressBar2.active) {
      setprogressBar2({ ...progressBar2, value: progressBar2.value + 0.5 });
    }
    else {
      setprogressBar2({ ...progressBar2, value: 0, active: false });
      setprogressBar3({ ...progressBar3, active: true });
    }
    if (progressBar2.active) {
      return;
    }
    if (progressBar3.value <= 100 && progressBar3.active) {
      setprogressBar3({ ...progressBar3, value: progressBar3.value + 0.5 });
    }
    else {
      setprogressBar3({ ...progressBar3, value: 0, active: false });
      setprogressBar1({ ...progressBar1, active: true });
    }
  }
  function handleImageSwitch(id: number): void {
    if (id === 1) {
      setCurrentImage({
        ...currentImage,
        className: 'trim',
      });
      setTimeout(() => {
        setCurrentImage({
          src: sharableImages[0],
          className: 'animatedContainer'
        });
      }, 300);
    }
    else if (id === 2) {
      setCurrentImage({
        ...currentImage,
        className: 'trim',
      });
      setTimeout(() => {
        setCurrentImage({
          src: sharableImages[1],
          className: 'animatedContainer'
        });
      }, 100);
    }
    else if (id === 3) {
      setCurrentImage({
        ...currentImage,
        className: 'trim'
      });
      setTimeout(() => {
        setCurrentImage({
          src: sharableImages[2],
          className: 'animatedContainer'
        })
      }, 100);
    }
  }

  useEffect(() => {
    const id = setInterval(handleProgressBars,25)
    return () => {
      clearInterval(id);
    };
  }, [progressBar1, progressBar2, progressBar3]);
  useEffect(() => {
    if (progressBar1.active) {
      handleImageSwitch(1);
      return
    }
    else if (progressBar2.active) {
      handleImageSwitch(2);
      return
    }
    else if (progressBar3.active) {
      handleImageSwitch(3);
      return
    }
  }, [progressBar1.active, progressBar2.active, progressBar3.active])
  // progressbarwidth 1 to 3 for the bar increment
  const progressBar1Width = {
    width: progressBar1.value + '%'
  }
  const progressBar2Width = {
    width: progressBar2.value + '%'
  }
  const progressBar3Width = {
    width: progressBar3.value + '%'
  }
  // handleprogressbar1 to 3 for mouseovers
  const handleProgressBar1 = () => {
    setprogressBar1({ ...progressBar1, active: true });
    setprogressBar2({ ...progressBar2, active: false, value: 0 });
    setprogressBar3({ ...progressBar3, active: false, value: 0 });
  }
  const handleProgressBar2 = () => {
    setprogressBar1({ ...progressBar1, active: false, value: 0 });
    setprogressBar2({ ...progressBar2, active: true });
    setprogressBar3({ ...progressBar3, active: false, value: 0 });
  }
  const handleProgressBar3 = () => {
    setprogressBar1({ ...progressBar1, active: false, value: 0 });
    setprogressBar2({ ...progressBar2, active: false, value: 0 });
    setprogressBar3({ ...progressBar3, active: true });
  }
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
          <ShareIcon height={90} width={90} className={styles.shareIcon} />
          <p>Shareable URLs</p>
          <h2>Get instant <br /> feedback, the <br /> easy way.</h2>
          <div className={styles.slideContainer}>
            <div className={styles[currentImage.className]}>
              <img src={currentImage.src} alt="share a link" />
            </div>
            <div>
              <div className={styles.share_a_link} onMouseOver={handleProgressBar1} onFocus={handleProgressBar1} id={styles[progressBar1.active.toString()]}>
                <div className={styles.progressBarContainer}>
                  <div style={progressBar1Width}></div>
                </div>
                <LinkIcon height={27} width={27} />
                <div className={styles.share_a_link_content}>
                  <h2>Share a link</h2>
                  <p>
                    Forget sharing screenshots and copy-pasting code snippets.
                    Get instant feedback on your code by sharing the URL of your sandbox with anyone.
                  </p>
                </div>
              </div>
              <div className={styles.share_a_link} onMouseOver={handleProgressBar2} onFocus={handleProgressBar2} id={styles[progressBar2.active.toString()]}>
                <div className={styles.progressBarContainer}>
                  <div className={styles.pop} style={progressBar2Width}></div>
                </div>
                <ClickIcon height={27} width={27} />
                <div className={styles.share_a_link_content}>
                  <h2>Share the context</h2>
                  <p>
                    Those opening your sandbox will see your code running along with any tests,
                    Storybook, or tasks you configured. No need to set up anything.
                  </p>
                </div>
              </div>
              <div className={styles.share_a_link} onMouseOver={handleProgressBar3} onFocus={handleProgressBar3} id={styles[progressBar3.active.toString()]}>
                <div className={styles.progressBarContainer}>
                  <div style={progressBar3Width}></div>
                </div>
                <GroupIcon height={27} width={27} />
                <div className={styles.share_a_link_content}>
                  <h2>Powerful collaboration</h2>
                  <p>
                    Get async feedback through comments or host live coding
                    sessions to learn together and guide others through the code.
                  </p>
                </div>
              </div>
              <Link href={'/s'} className={styles.getstarted}>Get Started {'>'}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
