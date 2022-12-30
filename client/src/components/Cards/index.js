import React from "react";
import classnames from "classnames";
import styles from "./Cards.module.css";
import Card from "../Card";

const Cards = ({ cards }) => {
  return (
    <section className={classnames(styles.cards)}>
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            id={card.id}
            component={card.component}
          ></Card>
        );
      })}
    </section>
  );
};

export default Cards;
