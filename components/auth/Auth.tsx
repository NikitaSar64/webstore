"use client";

import { FC } from "react";

import styles from "./Auth.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthField } from "./Auth.props";
import cn from "classnames";

export const Auth: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<AuthField>();

  const onSubmit: SubmitHandler<AuthField> = (data) => {
    //console.log(data.login);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>Login</div>
      <label htmlFor="name">
        <input {...register("login")} type="text" placeholder="Name" />
      </label>
      <label htmlFor="password">
        <input {...register("password")} type="text" placeholder="Password" />
      </label>
      <button className={cn(styles.btn, styles.submitBtn)} type="submit">
        submit
      </button>
      <button className={cn(styles.btn, styles.createBtn)} type="button">
        Creat An Account?
      </button>
      <div className={styles.lostBtn}>Lost Password?</div>
    </form>
  );
};
