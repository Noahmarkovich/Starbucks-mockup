import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { UserAvatarButton } from "./user-avatar-button";
import { useRouter } from "next/router";

export function MobileSideMenu({
  mobileMenuRef,
  isMobileMenuOpen,
  navLinks,
  sessionCookie,
  logout,
}) {
  const router = useRouter();
  return (
    <div className="dark-screen">
      <div
        ref={mobileMenuRef}
        className={isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}
      >
        <nav>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.title}
            </Link>
          ))}
          {sessionCookie?.isAdmin && <Link href={"/admin"}>Edit content</Link>}
        </nav>

        {sessionCookie ? (
          <div className="loggdin-user">
            <UserAvatarButton
              sessionCookie={sessionCookie}
              logout={logout}
              isUserMenuOpen={false}
              isMobile={true}
            />
            <button className="round-clear-button black" onClick={logout}>
              Log out
            </button>
          </div>
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
        <button className="only-text-button">
          <FaLocationDot /> Find a store
        </button>
      </div>
    </div>
  );
}
