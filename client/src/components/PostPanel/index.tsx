import React from "react";
import cn from "classnames";
import CoverСhoice from "./CoverСhoice";

import styles from "./PostPanel.module.css";
import { useSelector } from "react-redux";

const options = ["События", "Истории"];

const PostPanel = () => {
  const image = useSelector((state: any) => state.postState.chosenImage);
  return (
    <div className={cn(styles.container)}>
      <h3 className={cn(styles.title)}>Выбор раздела</h3>
      <ul className={cn(styles.options)}>
        {options.map((option) => {
          return <li className={cn(styles.option)}>{option}</li>;
        })}
      </ul>
      <CoverСhoice></CoverСhoice>
    </div>
  );
};

export default PostPanel;
