import { PropsWithChildren, useState } from "react";

import Footer from "../Footer";
import Header from "../Header";

type Props = PropsWithChildren<{}>;

const Layout = ( {children}: Props) => {
  
  return (
    <>
      <Header />
      <main className="relative z-20 max-w-3xl mx-auto bg-gray-100 xl:max-w-none font-poppins">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
