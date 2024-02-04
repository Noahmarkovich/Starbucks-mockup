import { useMatchMedia } from "@/hooks/useMatchMedia";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiStarbucks } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { MobileHeader } from "./mobile-header";
import { DesktopHeader } from "./destop-header";
import { MobileSideMenu } from "./mobile-side-menu";

const navLinks = [
  { id: "l101", title: "Menu", path: "/" },
  { id: "l102", title: "Rewards", path: "/" },
  { id: "l103", title: "Gift cards", path: "/" },
];

export function AppHeader({
  onOpenMobileMenu,
  isMobileMenuOpen,
  mobileMenuRef,
}) {
  const router = useRouter();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [sessionCookie, setSessionCookie] = useState(null);
  const session = Cookies.get("session");
  const isMobileResolution = useMatchMedia("(max-width:767px)", true);
  const userMenuRef = useRef(null);
  useOnClickOutside(userMenuRef, () => setIsUserMenuOpen(false));

  function logout() {
    setIsUserMenuOpen(false);
    Cookies.remove("session");
    setSessionCookie(null);
    router.push("/");
  }

  useEffect(() => {
    if (session) {
      setSessionCookie(JSON.parse(session));
    }
  }, [session]);

  return (
    <section ref={userMenuRef} className="app-header">
      {isMobileResolution ? (
        <MobileHeader
          directTo={() => router.push("/")}
          onOpenMobileMenu={onOpenMobileMenu}
        />
      ) : (
        <DesktopHeader
          navLinks={navLinks}
          sessionCookie={sessionCookie}
          logout={logout}
          isUserMenuOpen={isUserMenuOpen}
          openUserMenu={() => setIsUserMenuOpen(true)}
        />
      )}
      {isMobileMenuOpen && (
        <MobileSideMenu
          mobileMenuRef={mobileMenuRef}
          isMobileMenuOpen={isMobileMenuOpen}
          navLinks={navLinks}
          logout={logout}
          sessionCookie={sessionCookie}
        />
      )}
    </section>
  );
}
