'use client';

import { FC } from "react"

import searchIcon from '@assets/icons/search.png';
import Image from "next/image";

import styles from './Search.module.scss';

export const Search: FC = () => {

    return (
        <form className={styles.form}>
            <input 
                placeholder="Search Your Keywords . . ."
                className={styles.formInput}
                type="text"/>
            <button type="submit">
                <Image
                    alt="searchIcon"
                    src={searchIcon}
                    width={20}
                    height={20}
                    />
            </button>
        </form>
    )
}