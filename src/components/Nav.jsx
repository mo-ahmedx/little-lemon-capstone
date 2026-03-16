import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import OpenMenu from '../assets/menu-svgrepo-com (1).svg';
import ClosedMenu from '../assets/cross-svgrepo-com (3).svg';
import "../index.css";

// Added paths to your data
const NavLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/#about" },
  { id: "menu", label: "Menu", path: "/#menu" },
  { id: "reservation", label: "Reservation", path: "/booking" }, // Becomes a page
  { id: "order-online", label: "Order online", path: "/order" },
  { id: "login", label: "Login", path: "/login" },
];

export default function Nav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path, id) => {
    setIsOpenMenu(false); // Closes the mobile-nav automatically

    // Only intercept if it's an anchor link (Home, About, Menu)
    if (path.startsWith("/#") || path === "/") {
      // If we are on a different page (like Reservation), go home first
      if (location.pathname !== "/") {
        navigate("/");
        // Small timeout to allow the Homepage to load before scrolling
        setTimeout(() => scrollToSection(id), 100);
      } else {
        e.preventDefault();
        scrollToSection(id);
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Matching your original scroll logic
    const header = document.querySelector("nav");
    const headerHieght = header ? header.offsetHeight : 0;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPostion = elementPosition - headerHieght - 8;

    window.scrollTo({
      top: offsetPostion,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="shadow-2xl">
        {/* Wrapped Logo in Link to always return home */}
        <Link to="/" onClick={() => setIsOpenMenu(false)}>
          <img src={Logo} alt="Little Lemon Logo" />
        </Link>
        
        <ul>
          {NavLinks.map((n) => (
            <li key={n.id}>
              <Link 
                to={n.path} 
                onClick={(e) => handleNavClick(e, n.path, n.id)}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <img 
          className="humburger-menu" 
          src={isOpenMenu ? ClosedMenu : OpenMenu} 
          alt="Humburger Menu" 
          onClick={() => setIsOpenMenu(!isOpenMenu)} 
        />
      </nav>

      {isOpenMenu && (
        <div className="mobile-nav">
          {NavLinks.map((n) => (
            <li key={n.id}>
              <Link 
                to={n.path} 
                onClick={(e) => handleNavClick(e, n.path, n.id)}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
}