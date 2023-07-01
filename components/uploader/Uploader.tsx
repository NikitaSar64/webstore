"use client";

import { FC, useRef } from "react";
import styles from "./Uploader.module.scss";
import { UploaderProps } from "./Uploader.props";

export const Uploader: FC<UploaderProps> = ({ className, placeholder }) => {
  const inputFile = useRef<HTMLInputElement>(null);

  const eventHandler = () => {
    if (inputFile.current != null) {
      inputFile.current.click();
    }
  };

  return (
    <div className={styles.uploader}>
      <div onClick={eventHandler} className={styles.btn}>
        Choose file
      </div>
      <div className={styles.placeholder}>{placeholder}</div>
      <input className={styles.inputFile} type="file" ref={inputFile} />
    </div>
  );
};
