import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Providers from "./Providers";

function Layout() {
  return (
    <>
      <Providers>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Providers>
    </>
  );
}

export default Layout;
