import logo from "../assent/logo.png";
import { navbarLinks } from "../assent/Data";
import { Link } from "react-router-dom";
import { Key } from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="شياكتك-logo" />
        </div>
        <ul>
          {navbarLinks.map((link: { title: string; href: string }, i: Key) => {
            return (
              <li key={i}>
                <Link to={`${link.href}`}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <Search />
      </nav>
    </header>
  );
};

export default Navbar;
