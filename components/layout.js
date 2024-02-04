import Head from "next/head";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMobileMenuOpen(false));
  return (
    <>
      <Head>
        <title>Starbucks mockup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader
        mobileMenuRef={menuRef}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <main>{children}</main>

      <AppFooter />
    </>
  );
}
