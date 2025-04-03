import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {

  return (
    <div className={styles.container} id="products">
      <h1 className={styles.title}>THE BEST BURGER IN TOWN</h1>
      <p className={styles.desc}>
      Welcome to Burger Place, your ultimate destination for mouthwatering burgers! We offer a diverse selection of delectable burgers crafted with passion and quality ingredients. Indulge in our sizzling gourmet creations, from classic beef patties to delightful vegetarian and vegan options.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
