"use client";

import styles from "./page.module.css";
import Image from "next/image";
import main from "@/public/iCloud Photos/main.jpg";

export default function Home() {
  function jumpButton(event) {
    const button = event.target;
    const newPositionX = Math.random() * window.innerWidth;
    const newPositionY = Math.random() * window.innerHeight;

    button.style.left = `${newPositionX}px`;
    button.style.top = `${newPositionY}px`;
  }

  return (
    <>
      <div className={styles.container}>
        <Image src={main} className={styles.img} />
        <div className={styles.main}>
          <div className={styles.header}>Will you be my Valentine?</div>
          <div className={styles.button__list}>
            <button
              className={`${styles.btn} ${styles.btn__no}`}
              onClick={jumpButton}
            >
              No
            </button>
            <button className={styles.btn}>Yes</button>
          </div>
        </div>
      </div>
    </>
  );
}
