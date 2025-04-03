import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import { useRouter } from "next/router";

const PizzaCard = ({ pizza }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${pizza._id}`);
  };

  return (
    <div className={styles.container}  onClick={handleClick}>
      <Image className={styles.pizza} src={pizza.img} alt="" width="500" height="500" />
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
