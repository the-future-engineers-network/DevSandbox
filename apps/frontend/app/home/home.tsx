import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ClickIcon, GroupIcon, LinkIcon, ShareIcon } from "../icons";
import styles from "./home.module.css";

interface ProgressBar {
  value: number;
  active: boolean;
}
export function Home(): JSX.Element {
  const commentImage = "/comment.webp";
  const contextImage = "/context.webp";
  const shareImage = "/shareurl.webp";
  const sharableImages = [shareImage, contextImage, commentImage];
  const [currentImage, setCurrentImage] = useState({
    className: "trim",
    src: sharableImages[0],
  });
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([
    { value: 0, active: true },
    { value: 0, active: false },
    { value: 0, active: false },
  ]);

  const updateProgressBar = (
    index: number,
    newValue: number,
    newActive: boolean
  ): void => {
    setProgressBars((prevProgressBars) => {
      const updatedProgressBars = [...prevProgressBars];
      updatedProgressBars[index] = {
        ...updatedProgressBars[index],
        active: newActive,
        value: newValue,
      };
      return updatedProgressBars;
    });
  };
  function handleProgressBars(): void {
    if (progressBars[0].value <= 100 && progressBars[0].active) {
      updateProgressBar(0, progressBars[0].value + 0.5, true);
    } else {
      updateProgressBar(0, 0, false);
      updateProgressBar(1, progressBars[1].value, true);
    }
    if (progressBars[0].active) {
      return;
    }
    if (progressBars[1].value <= 100 && progressBars[1].active) {
      updateProgressBar(1, progressBars[1].value + 0.5, true);
    } else {
      updateProgressBar(1, 0, false);
      updateProgressBar(2, progressBars[2].value + 0.5, true);
    }
    if (progressBars[1].active) {
      return;
    }
    if (progressBars[2].value <= 100 && progressBars[2].active) {
      updateProgressBar(2, progressBars[2].value + 0.5, true);
    } else {
      updateProgressBar(2, 0, false);
      updateProgressBar(0, progressBars[0].value + 0.5, true);
    }
  }
  function handleImageSwitch(id: number): void {
    setCurrentImage({
      ...currentImage,
      className: "trim",
    });
    setTimeout(() => {
      setCurrentImage({
        src: sharableImages[id - 1],
        className: "animatedContainer",
      });
    }, 300);
  }
  useEffect(() => {
    const id = setInterval(handleProgressBars, 35);
    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    if (progressBars[0].active) {
      handleImageSwitch(1);
    } else if (progressBars[1].active) {
      handleImageSwitch(2);
    } else if (progressBars[2].active) {
      handleImageSwitch(3);
    }
  }, [progressBars[0].active, progressBars[1].active, progressBars[2].active]);

  const progressBar1Width = {
    width: `${progressBars[0].value}%`,
  };
  const progressBar2Width = {
    width: `${progressBars[1].value}%`,
  };
  const progressBar3Width = {
    width: `${progressBars[2].value}%`,
  };

  const handleProgressBar = (index: number): void => {
    const updates = [0, 0, 0];
    updates[index] = progressBars[index].value + 0.5;
    updateProgressBar(0, updates[0], index === 0);
    updateProgressBar(1, updates[1], index === 1);
    updateProgressBar(2, updates[2], index === 2);
  };

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
          <ShareIcon className={styles.shareIcon} height={90} width={90} />
          <p>Shareable URLs</p>
          <h2>
            Get instant <br /> feedback, the <br /> easy way.
          </h2>
          <div className={styles.slideContainer}>
            <div className={styles[currentImage.className]}>
              <img alt="share a link" src={currentImage.src} />
            </div>
            <div className={styles.slider}>
              <div
                className={styles[progressBars[0].active.toString()]}
                onFocus={() => {
                  handleProgressBar(0);
                }}
                onMouseOver={() => {
                  handleProgressBar(0);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div style={progressBar1Width} />
                </div>
                <LinkIcon height={27} width={27} />
                <div className={styles.shareALinkContent}>
                  <h2>Share a link</h2>
                  <p>
                    Forget sharing screenshots and copy-pasting code snippets.
                    Get instant feedback on your code by sharing the URL of your
                    sandbox with anyone.
                  </p>
                </div>
              </div>
              <div
                className={styles[progressBars[1].active.toString()]}
                onFocus={() => {
                  handleProgressBar(1);
                }}
                onMouseOver={() => {
                  handleProgressBar(1);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div className={styles.pop} style={progressBar2Width} />
                </div>
                <ClickIcon height={27} width={27} />
                <div className={styles.shareALinkContent}>
                  <h2>Share the context</h2>
                  <p>
                    Those opening your sandbox will see your code running along
                    with any tests, Storybook, or tasks you configured. No need
                    to set up anything.
                  </p>
                </div>
              </div>
              <div
                className={styles[progressBars[2].active.toString()]}
                onFocus={() => {
                  handleProgressBar(2);
                }}
                onMouseOver={() => {
                  handleProgressBar(2);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div style={progressBar3Width} />
                </div>
                <GroupIcon height={27} width={27} />
                <div className={styles.shareALinkContent}>
                  <h2>Powerful collaboration</h2>
                  <p>
                    Get async feedback through comments or host live coding
                    sessions to learn together and guide others through the
                    code.
                  </p>
                </div>
              </div>
              <Link className={styles.getStarted} href="#">
                <h3>
                  Get Started <ArrowIcon />
                </h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
