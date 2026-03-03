import { useState } from "react";
import Logo from "../assets/Logo.svg";
import "../index.css";
import OpenMenu from '../assets/menu-svgrepo-com (1).svg';
import ClosedMenu from '../assets/cross-svgrepo-com (3).svg';
//Navs as data

const NavLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "reservation", label: "Reservation" },
  { id: "order-online", label: "Order online" },
  { id: "login", label: "Login" },
];
export default function Nav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleNavClick = (e, id) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if(!el) return;

      const header = document.querySelector("header");
      const headerHieght = header ? header.offsetHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPostion = elementPosition - headerHieght - 8;

      window.scrollTo({
        top : offsetPostion,
        behavior: "smooth",
      });
  }
  return (
    <>
    <nav className="shadow-2xl">
      <img src={Logo} alt="Little Lemon Logo" />
      <ul>
        {NavLinks.map(n => (
          <li key={n.id}>
            <a href={`#${n.id}`}
              onClick={(e) => handleNavClick(e, n.id)}
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <img className="humburger-menu" src={isOpenMenu? ClosedMenu : OpenMenu} alt="Humburger Menu" onClick={() => setIsOpenMenu(!isOpenMenu)} />
    </nav>

    {isOpenMenu && 
      <>
        <div className="mobile-nav">
          {NavLinks.map(n => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={(e) => handleNavClick(e, n.id)}>{n.label}</a>
            </li>
          ))}
        </div>
      </>
    }
    </>
  );
}
