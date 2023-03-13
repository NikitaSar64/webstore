import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";

export const Layout = ( { children } : LayoutProps ) : JSX.Element => {

    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};