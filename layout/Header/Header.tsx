import { Logo, Search } from "@/components";
import styles from './Header.module.scss';
import { HeaderMenu } from "./components";
import { Select, Divider } from "antd";
import Link from "next/link";
import cn from "classnames";

export const Header = () : JSX.Element => {
    return (
        <header>
            <div className={styles.top}>
                <div className={cn(styles.container, styles.flex)}>
                    <div className={styles.title}>
                        Welcome to our online shop
                    </div>
                    <div>
                        <Select
                            style={{background: 'transparent'}}
                            bordered={false}
                            value='English (USD)'
                            options={[
                                {
                                value: 'english',
                                label: 'English (USD)',
                                },
                                {
                                value: 'russian',
                                label: 'Russian (RUS)',
                                },
                            ]}
                        />
                        <Divider 
                            type='vertical'
                            style={{background: 'white'}}
                            />
                        <Link  
                            href="/"
                            className={styles.login}
                            >Login or Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={cn(styles.container, styles.flex)}>
                    <Logo/>
                    <Search/>
                    <HeaderMenu/>
                </div>
            </div>
        </header>
    )
}