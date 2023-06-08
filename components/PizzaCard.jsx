import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image className={styles.pizza} src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <div className={styles.infoWrapper}>
      <div className={styles.wrapper}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      </div>
      <p className={styles.desc}>{pizza.desc}</p>
      </div>
    </div>
  );
};

export default PizzaCard;
