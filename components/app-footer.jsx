import { FaInstagramSquare, FaSpotify } from "react-icons/fa";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa6";

const navLinks = [
  {
    id: "l101",
    title: "Privacy Notice",
    path: "https://www.starbucks.com/terms/privacy-policy/",
  },
  {
    id: "l102",
    title: "Terms of Use",
    path: "https://www.starbucks.com/terms/starbucks-terms-of-use/",
  },
  {
    id: "l103",
    title: "Do not share my personal information",
    path: "https://www.starbucks.com/personal-information",
  },
  {
    id: "l104",
    title: "CA Supply Chain Act",
    path: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf",
  },
  {
    id: "l105",
    title: "Accessibility",
    path: "https://www.starbucks.com/about-us/accessibility/",
  },
  {
    id: "l106",
    title: "Cookie Preferences",
    path: "https://www.starbucks.com/about-us/accessibility/",
  },
];

const socialLinks = [
  { id: "s1", icon: <FaSpotify /> },
  { id: "s2", icon: <FaFacebook /> },
  { id: "s3", icon: <FaPinterest /> },
  { id: "s4", icon: <FaInstagramSquare /> },
  { id: "s5", icon: <FaTwitter /> },
];

export function AppFooter() {
  return (
    <footer>
      <section className="social-media">
        {socialLinks.map((link) => (
          <a key={link.id}>{link.icon}</a>
        ))}
      </section>
      <section className="site-links">
        {navLinks.map((link) => (
          <a key={link.id} href={link.path}>
            {link.title} <span>|</span>
          </a>
        ))}
      </section>
      <section>© 2024 Starbucks Coffee Company. All rights reserved.</section>
    </footer>
  );
}
