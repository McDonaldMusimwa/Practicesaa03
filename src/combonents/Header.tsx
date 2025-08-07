import logo from "../../public/P.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="logo" className="logo" />
        <NavLink to={"/"}>
          <h2>Practice Solution</h2>
        </NavLink>
      </div>

      <div className={styles.links}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </nav>
  );
}

export default Header;
