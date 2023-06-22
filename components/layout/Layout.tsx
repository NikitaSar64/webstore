import React, { FC, ReactNode } from "react";

import { Footer, Header } from "./index";
import { LayoutProps } from "./Layout.props";

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
