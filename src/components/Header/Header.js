import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact Me",
    url: "/Contact",
  },
];

function Header(props) {
  return (
    <div>
      <ul>
        {navLinks.map((navLink) => (
          <Link to={navLink.url}> {navLink.title}</Link>
        ))}
      </ul>
    </div>
  );
}
export default Header;
