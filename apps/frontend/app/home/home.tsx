import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ClickIcon, GroupIcon, LinkIcon, ShareIcon } from "../icons";
import styles from "./home.module.css";

const shareableMessages = [
  {
    title: "Share a link",
    description:
      "Forget sharing screenshots and copy-pasting code snippets. Get instant feedback on your code by sharing the URL of your sandbox with anyone.",
    imageUrl: "/shareurl.webp",
    icon: <LinkIcon height={27} width={27} />,
  },
  {
    title: "Share the context",
    description:
      "Those opening your sandbox will see your code running along with any tests, Storybook, or tasks you configured. No need to set up anything.",
    imageUrl: "/context.webp",
    icon: <ClickIcon height={27} width={27} />,
  },
  {
    title: "Powerful collaboration",
    description:
      "Get async feedback through comments or host live coding sessions to learn together and guide others through the code.",
    imageUrl: "/comment.webp",
    icon: <GroupIcon height={27} width={27} />,
  },
];

export function Home(): JSX.Element {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeImage = shareableMessages[activeIdx];

  const updateProgress = (): void => {
    setProgress((previousProgress) => (previousProgress + 0.5) % 100);
  };

  const handleMessageInteraction = (idx: number) => () => {
    setActiveIdx(idx);
    setProgress(0);
  };

  useEffect(() => {
    const id = setInterval(updateProgress, 35);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      setActiveIdx((previousIdx) => (previousIdx + 1) % 3);
      setProgress(0);
    }
  }, [progress]);

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
            <div className={styles.imageContainer}>
              <Image
                alt="todo: add proper alt text"
                height={600}
                sizes="100vw"
                src={activeImage.imageUrl}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={1080}
              />
            </div>

            <div className={styles.slider}>
              {shareableMessages.map(({ title, description, icon }, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={title}
                    onFocus={handleMessageInteraction(idx)}
                    onMouseOver={handleMessageInteraction(idx)}
                  >
                    <div className={styles.progressBarContainer}>
                      <div
                        style={{
                          width: isActive ? `${progress}%` : "0%",
                          height: "100%",
                          backgroundColor: "var(--primary)",
                        }}
                      />
                    </div>
                    {icon}
                    <div className={styles.shareALinkContent}>
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}

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
