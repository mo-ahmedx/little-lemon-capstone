import Logo from "../assets/Logo.svg";
import "../index.css";

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
    <nav>
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
    </nav>
  );
}
