import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          {/* <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2> */}
          <h1 className={styles.title}>LINKS</h1>
          <p className={styles.text}>
            Customer Support
          </p>
          <p className={styles.text}>
            FAQs
          </p>
          <p className={styles.text}>
            Gift Cards
          </p>
          <p className={styles.text}>
            Privacy Policy
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1473 N. Oak Lane #305.
            <br /> London, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            628 E. Pine Street #401.
            <br /> London, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> London, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            4198 W. Maple Avenue #101.
            <br /> London, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
