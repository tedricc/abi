"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Are you positive??",
    "Princess please",
    "Just think about it",
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Don't do this :(",
    "Pretty please",
    "I'm gonna cry...",
    "You're breaking my heart :(",
  ];

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[noCount % phrases.length];
  }

  return (
    <>
      <div className={styles.container}>
        {yesPressed ? (
          <div className={styles.main}>
            <img src="https://media4.giphy.com/media/2zoFXxGEQRR4DknVVa/giphy.gif?cid=ecf05e47e9suu1l1iweg5pd7l2x79k3cmh7q48c8gk340waf&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
            <div className={styles.header}>YAY!!!!</div>
          </div>
        ) : (
          <div className={styles.main}>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzl0NzY5czk5Nm95MGhqMmplemY5enFxOTBnY3lqdm5nM2thcGcxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQfvDzo7VhSRy8M/giphy.gif" />
            <div className={styles.header}>Will you be my Valentine?</div>
            <div className={styles.button__list}>
              <button className={styles.btn} onClick={handleNoClick}>
                {getNoButtonText()}
              </button>
              <button
                className={styles.btn}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
