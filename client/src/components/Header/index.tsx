import React, { ReactNode } from "react";
import classnames from "classnames";

import Menu from "../Menu";
import Logo from "../Logo";
import Support from "../Support";
import styles from "./Header.module.css";

interface HeaderI {
  children: ReactNode;
  solid: boolean;
}

const Header = ({ children, solid }: HeaderI) => {
  return (
    <>
      <header
        className={classnames(styles.header, {
          [styles.header_solid]: solid,
        })}
      >
        <div className={classnames(styles.container)}>{children}</div>
      </header>
    </>
  );
};

export default Header;
