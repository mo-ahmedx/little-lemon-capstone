export default function Nav() {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex list-none gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservation">Reservations</a>
        </li>
        <li>
          <a href="#order-online">Order online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
