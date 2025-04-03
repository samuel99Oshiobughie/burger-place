import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
        <Link href="/" passHref>
          <Image src="/img/burger.png" alt="" width="50" height="42" />
        </Link>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> Burger</div>
          <div className={styles.text}> Place</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <ScrollLink to="home" smooth={true} duration={500}> Homepage</ScrollLink>
          </li>
          <li className={styles.listItem}>
          <ScrollLink to="products" smooth={true} duration={500}>Products</ScrollLink>
          </li>
          <li className={styles.listItem}>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </li>

          {/* <Link href="#contact" passHref> */}
          {/* </Link> */}
          {/* <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li> */}
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
