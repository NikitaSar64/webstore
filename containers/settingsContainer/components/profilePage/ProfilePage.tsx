import { Button } from "@/components";
import { FC } from "react";
import styles from "./ProfilePage.module.scss";
import { ProfilePageProps } from "./ProfilePage.props";

const inputLabel = [
  "First Name",
  "Last Name",
  "Company Name",
  "Country",
  " Address Line 1",
  "Address Line 2",
  "City",
  " State / Province / Region",
  " Zip / Postal Code",
];

export const ProfilePage: FC<ProfilePageProps> = ({ title }) => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <form className={styles.formSettings}>
          {inputLabel.map((inputName) => {
            return (
              <div key={inputName} className={styles.inputLine}>
                <label>{inputName}</label>
                <input type="text" />
              </div>
            );
          })}
          <Button text="Update" type="submit" className={styles.btn} />
        </form>
      </div>
    </div>
  );
};
