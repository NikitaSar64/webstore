import { BreadCrumbs, Select } from "@/components";
import { FC } from "react";
import styles from "./WithdrawalsContainer.module.scss";
import cn from "classnames";
import { WithdrawsItem } from "./components";
import { Withdraws } from "./components/withdrawsitem/WithdrawsItem.props";

const withdrawsItems: Withdraws[] = [
  {
    date: "Dec 26th, 2016",
    email: "Psdboss@paypal.com",
    price: "$200",
    status: "Pending",
  },
  {
    date: "Dec 26th, 2016",
    email: "Psdboss@paypal.com",
    price: "$200",
    status: "Paid",
  },
  {
    date: "Dec 26th, 2016",
    email: "Psdboss@paypal.com",
    price: "$200",
    status: "Paid",
  },
];

export const WithdrawalsContainer: FC = () => {
  return (
    <section className={styles.withdrawals}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.wrapper}>
          <div className={cn("inner-container", styles.col)}>
            <h2 className="inner-title">Withdrawals Earnings</h2>
            <form action="#" className={styles.form}>
              <div className={styles.formLine}>
                <label>Amount to Withdraw ($2000.00 Maximum)</label>
                <input
                  type="text"
                  placeholder="Enter the amount you want to withdraw..."
                  className="basic-input"
                />
              </div>
              <div className={styles.formLine}>
                <label>Choose your Withdraw Method</label>
                <Select className={styles.select}>
                  <option>Select Your Card</option>
                  <option>Select Your Card</option>
                </Select>
              </div>
              <div className={styles.formLine}>
                <label>Your Account Name</label>
                <Select className={styles.select}>
                  <option>Select Your Card</option>
                  <option>Select Your Card</option>
                </Select>
              </div>
              <div className={styles.formLine}>
                <label>Confirm Your Password</label>
                <input
                  type="text"
                  placeholder="Select Your Card"
                  className="basic-input"
                />
              </div>
              <button type="submit">Request Withdrawal</button>
            </form>
          </div>
          <div className={cn("inner-container", styles.col)}>
            <h2 className="inner-title">Withdrawal History</h2>
            <div className={styles.withdrawsItems}>
              {withdrawsItems.map((item, index) => (
                <WithdrawsItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
