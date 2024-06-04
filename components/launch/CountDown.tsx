"use client";
import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading } from "@chakra-ui/react";
import logo from "../../public/logo.png";
import launchPoster from "../../assets/images/launch.jpg";

import styles from "./CountDown.module.css";
import { useEffect } from "react";

const CountDown = ({
  toDate,
  handleLaunch,
}: {
  toDate: string;
  handleLaunch: () => void;
}) => {
  useEffect(() => {
    const countToDate = new Date(toDate) as any;
    let previousTimeBetweenDates;
    const interval = setInterval(() => {
      const currentDate = new Date() as any;
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      flipAllCards(timeBetweenDates);

      previousTimeBetweenDates = timeBetweenDates;

      const isLaunched = new Date(toDate) <= new Date();
      if (isLaunched) {
        handleLaunch();
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  function flipAllCards(time: number) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / (3600 * 24));

    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
      document.querySelector("[data-minutes-tens]"),
      Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
      document.querySelector("[data-seconds-tens]"),
      Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  }

  function flip(flipCard: HTMLElement | null, newNumber: number) {
    const topHalf = flipCard?.querySelector(`.${styles["top"]}`);

    if (!topHalf || !topHalf.textContent) {
      return;
    }

    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard?.querySelector(`.${styles["bottom"]}`);
    if (!bottomHalf) {
      return;
    }

    const topFlip = document.createElement("div");
    topFlip.classList.add(styles["top-flip"]);
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add(styles["bottom-flip"]);

    topHalf.textContent = String(startNumber);
    bottomHalf.textContent = String(startNumber);
    topFlip.textContent = String(startNumber);
    bottomFlip.textContent = String(newNumber);

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = String(newNumber);
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = String(newNumber);
      bottomFlip.remove();
    });
    flipCard?.append(topFlip, bottomFlip);
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="10px"
      height="100vh"
      bgImage="url('./flag.jpg')"
      bgSize="cover"
      bgPos="center"
    >
      <Link href="/">
        <Image w="80px" src={logo} alt="mic logo" priority></Image>
      </Link>
      <Heading size={["md", "lg", "xl"]} textAlign="center">
        Welcome to Re-Launch of micindia.org
      </Heading>
      <Image
        w={["200px", "300px", "400px"]}
        src={launchPoster}
        alt="launch poster"
        priority
      ></Image>

      <Box>
        <div className={styles["container"]}>
          <div className={styles["container-segment"]}>
            <div className={styles["segment"]}>
              <div className={styles["flip-card"]} data-days-tens>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
              <div className={styles["flip-card"]} data-days-ones>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
            </div>
            <div className={styles["segment-title"]}>Days</div>
          </div>
          <div className={styles["container-segment"]}>
            <div className={styles["segment"]}>
              <div className={styles["flip-card"]} data-hours-tens>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
              <div className={styles["flip-card"]} data-hours-ones>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
            </div>
            <div className={styles["segment-title"]}>Hour</div>
          </div>
          <div className={styles["container-segment"]}>
            <div className={styles["segment"]}>
              <div className={styles["flip-card"]} data-minutes-tens>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
              <div className={styles["flip-card"]} data-minutes-ones>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
            </div>
            <div className={styles["segment-title"]}>Minutes</div>
          </div>
          <div className={styles["container-segment"]}>
            <div className={styles["segment"]}>
              <div className={styles["flip-card"]} data-seconds-tens>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
              <div className={styles["flip-card"]} data-seconds-ones>
                <div className={styles["top"]}>0</div>
                <div className={styles["bottom"]}>0</div>
              </div>
            </div>
            <div className={styles["segment-title"]}>Seconds</div>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default CountDown;
