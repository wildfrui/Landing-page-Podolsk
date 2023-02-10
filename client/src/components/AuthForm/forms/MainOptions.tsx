import React from "react";
import cn from "classnames";
import { Button } from "@mui/material";
import styles from "../AuthForm.module.css";

type Props = {
  handleChange: () => void;
};

const MainOptions = ({ handleChange }: Props) => {
  return (
    <div className={cn(styles.options)}>
      <Button classes={{ root: styles.option }} onClick={() => handleChange()}>
        Почта
      </Button>
      <Button classes={{ root: styles.option }}>Google</Button>
      <Button classes={{ root: styles.option }}>ВКонтакте</Button>
    </div>
  );
};

export default MainOptions;
