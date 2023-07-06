"use client";

import { BreadCrumbs, Button, Uploader } from "@/components";
import styles from "./UploadContainer.module.scss";
import { FC } from "react";
import { Select } from "@components/index";
import cn from "classnames";

export const UploadContainer: FC = () => {
  return (
    <section className={styles.upload}>
      <div className="container">
        <BreadCrumbs />
        <div className="inner-container">
          <form>
            <h2 className="inner-title">Upload Your item</h2>
            <div className={styles.lineWrapper}>
              <div className={styles.line}>
                <label>Select Categories</label>
                <Select className={styles.select}>
                  <option value="Select">Select</option>
                  <option value="Select">Select</option>
                  <option value="Select">Select</option>
                </Select>
              </div>
              <div className={styles.line}>
                <label>Product Name</label>
                <input
                  className={cn("basic-input", styles.border)}
                  type="text"
                  placeholder="Enter your product name here ..."
                />
              </div>
              <div className={styles.line}>
                <label>Product Description</label>
                <textarea
                  className={cn("basic-textarea", styles.border)}
                  placeholder="<h1> Type your text  here </h1/>"
                ></textarea>
              </div>
              <div className={styles.line}>
                <label>Upload Main File</label>
                <Uploader placeholder="No File Choosen" />
              </div>
              <div className={styles.line}>
                <label>Upload Screenshots</label>
                <Uploader placeholder="No File Choosen" />
              </div>
              <div className={styles.line}>
                <label>File Included</label>
                <Select className={styles.select}>
                  <option value="Select File Type ">Select File Type </option>
                  <option value="Select File Type ">Select File Type </option>
                  <option value="Select File Type ">Select File Type </option>
                </Select>
              </div>
              <div className={styles.line}>
                <label>File Dimensions</label>
                <input
                  className={cn("basic-input", styles.border)}
                  type="text"
                  placeholder="Enter the item  dimentionss here ..."
                />
              </div>
              <div className={styles.line}>
                <label>Item Tags</label>
                <input
                  type="text"
                  placeholder="Enter Tag Here"
                  className={cn("basic-input", styles.border)}
                />
              </div>
            </div>
            <h2 className="inner-title">Set Your Price (US$)</h2>
            <div className={styles.lineWrapper}>
              <div className={styles.line}>
                <label>Regular License</label>
                <input
                  type="text"
                  placeholder="$00.00"
                  className={cn("basic-input", styles.border)}
                />
              </div>
              <div className={styles.line}>
                <label>Extended License</label>
                <input
                  type="text"
                  placeholder="$00.00"
                  className={cn("basic-input", styles.border)}
                />
              </div>
              <Button text="Submit" className={styles.submit} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
