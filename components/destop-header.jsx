import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { SiStarbucks } from "react-icons/si";
import { UserAvatarButton } from "./user-avatar-button";
import { useRouter } from "next/router";

export function DesktopHeader({
  navLinks,
  sessionCookie,
  logout,
  isUserMenuOpen,
  openUserMenu,
}) {
  const router = useRouter();
  return (
    <div className="desktop-header">
      <div className="left-header-container">
        <div onClick={() => router.push("/")} className="logo-container">
          <SiStarbucks />
        </div>
        <nav>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.title}
            </Link>
          ))}
          {sessionCookie?.isAdmin && <Link href={"/admin"}>Edit content</Link>}
        </nav>
      </div>
      <div className="right-header-container">
        <button className="only-text-button">
          <FaLocationDot /> Find a store
        </button>
        {sessionCookie ? (
          <UserAvatarButton
            openUserMenu={openUserMenu}
            sessionCookie={sessionCookie}
            logout={logout}
            isUserMenuOpen={isUserMenuOpen}
          />
        ) : (
          <div className="login">
            <button
              onClick={() => router.push("/login")}
              className="round-clear-button"
            >
              Sign in
            </button>
            <button
              onClick={() => router.push("/register")}
              className="round-clear-button black"
            >
              Join now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
