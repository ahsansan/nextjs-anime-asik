import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLogo}>
        <Link href="/">
          <a>
            <img
              src="/OnlineCinemaIcon.png"
              alt="Online Cinema"
              className={styles.LogoImage}
            />
          </a>
        </Link>
      </div>
      <div className={styles.HeaderMenu}>
        <button className={styles.LoginAuthButton}>Login</button>
      </div>
    </div>
  );
};

export default Header;
