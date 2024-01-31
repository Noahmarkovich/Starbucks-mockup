import Link from "next/link";
import { useRouter } from "next/router";
import { FaLocationDot } from "react-icons/fa6";
import { SiStarbucks } from "react-icons/si";

const navLinks = [
  { id: "l101", title: "Menu", path: "/" },
  { id: "l102", title: "Rewards", path: "/" },
  { id: "l103", title: "Gift cards", path: "/" },
];

export function AppHeader() {
  const router = useRouter();
  return (
    <section className="app-header">
      <div className="left-header-container">
        <div className="logo-container">
          <SiStarbucks />
        </div>
        <nav>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="right-header-container">
        <button className="only-text-button">
          <FaLocationDot /> Find a store
        </button>
        <div className="login">
          <button
            onClick={() => router.push("/login")}
            className="round-clear-button"
          >
            Sign in
          </button>
          <button className="round-clear-button black">Join now</button>
        </div>
      </div>
    </section>
  );
}
