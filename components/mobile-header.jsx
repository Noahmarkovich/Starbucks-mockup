import { RxHamburgerMenu } from "react-icons/rx";
import { SiStarbucks } from "react-icons/si";

export function MobileHeader({ directTo, onOpenMobileMenu }) {
  return (
    <div className="mobile-header">
      <div onClick={directTo} className="logo-container">
        <SiStarbucks />
      </div>
      <div onClick={onOpenMobileMenu} className="burger-options">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}
