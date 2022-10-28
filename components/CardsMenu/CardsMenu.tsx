import Link from "next/link";
import { TypeCardsMenu, TypeCardMenu } from "./interfaces";
import styles from "./CardsMenu.module.scss";

export const CardsMenu = ({ cards }: TypeCardsMenu) => {
  return (
    <>
      {cards.map((option: TypeCardMenu) => (
        <Link href={option.link} className={styles.card} key={option.title}>
          <h2>{option.title} &rarr;</h2>
          <p>{option.description}</p>
        </Link>
      ))}
    </>
  );
};
