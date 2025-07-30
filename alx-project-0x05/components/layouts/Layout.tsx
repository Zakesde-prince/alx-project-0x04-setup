import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interface"; // ✅ REQUIRED IMPORT

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
