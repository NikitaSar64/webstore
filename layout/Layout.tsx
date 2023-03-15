import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.scss';

export const Layout = ( { children } : LayoutProps ) : JSX.Element => {

    return (
        <div className={styles.layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};