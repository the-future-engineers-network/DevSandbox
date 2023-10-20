import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ClickIcon, GroupIcon, LinkIcon, ShareIcon } from "../icons";
import styles from "./home.module.css";

export function Home(): JSX.Element {
  const sharableImages = ["/shareurl.webp", "/context.webp", "/comment.webp"];
  const [currentImage, setCurrentImage] = useState({
    className: "trim",
    src: sharableImages[0],
  });
  const [progressBars, setProgressBars] = useState({
    type: "progressBar1",
    value: 0,
  });
  const progressBarTypes = ["progressBar1", "progressBar2", "progressBar3"];
  function handleProgressBars(): void {
    const { type, value } = progressBars;
    if (value < 100) {
      setProgressBars({
        type: type,
        value: value + 0.5,
      });
    } else {
      let nextType: string;
      if (type === "progressBar1") {
        nextType = "progressBar2";
      } else if (type === "progressBar2") {
        nextType = "progressBar3";
      } else {
        nextType = "progressBar1";
      }
      setProgressBars({
        type: nextType,
        value: 0,
      });
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
    for (let i = 0; i <= progressBarTypes.length - 1; i++) {
      if (progressBars.type === progressBarTypes[i]) {
        handleImageSwitch(i + 1);
      }
    }
  }, [progressBars.type]);

  const activeStyle = {
    width: `${progressBars.value}%`,
    className: "active",
  };
  const inactiveStyle = {
    width: "0%",
    className: "inactive",
  };
  // To handle MouseOvers
  const handleProgressBar = (id: number): void => {
    setProgressBars({ value: 0, type: progressBarTypes[id - 1] });
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
                className={
                  progressBars.type === progressBarTypes[0]
                    ? styles[activeStyle.className]
                    : "inactive"
                }
                onFocus={() => {
                  handleProgressBar(1);
                }}
                onMouseOver={() => {
                  handleProgressBar(1);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div
                    style={
                      progressBars.type === progressBarTypes[0]
                        ? activeStyle
                        : inactiveStyle
                    }
                  />
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
                className={
                  progressBars.type === progressBarTypes[1]
                    ? styles[activeStyle.className]
                    : "inactive"
                }
                onFocus={() => {
                  handleProgressBar(2);
                }}
                onMouseOver={() => {
                  handleProgressBar(2);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div
                    className={styles.pop}
                    style={
                      progressBars.type === progressBarTypes[1]
                        ? activeStyle
                        : inactiveStyle
                    }
                  />
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
                className={
                  progressBars.type === progressBarTypes[2]
                    ? styles[activeStyle.className]
                    : "inactive"
                }
                onFocus={() => {
                  handleProgressBar(3);
                }}
                onMouseOver={() => {
                  handleProgressBar(3);
                }}
              >
                <div className={styles.progressBarContainer}>
                  <div
                    style={
                      progressBars.type === progressBarTypes[2]
                        ? activeStyle
                        : inactiveStyle
                    }
                  />
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
