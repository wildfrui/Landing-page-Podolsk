import React, { ReactNode } from "react";
import classnames from "classnames";

import styles from "./Header.module.css";
import Menu from "components/Menu";
import Support from "components/Support";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import deepOrange from "@mui/material/colors/deepOrange";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
  { name: "СОЗДАТЬ", href: "/admin" },
];

interface HeaderI {
  solid: boolean;
}

const Header = ({ solid }: HeaderI) => {
  const userInfo = useSelector((state: any) => state.authState.userInfo);
  console.log(userInfo);

  return (
    <>
      <header
        className={classnames(styles.header, {
          [styles.header_solid]: solid,
        })}
      >
        <div className={classnames(styles.container)}>
          <Menu mix="header" links={links}></Menu>
          {/* {!noLogo && <Logo component="header"></Logo>} */}
          {userInfo ? (
            <div className={styles.user_info}>
              {userInfo.name}
              <Avatar
                className={styles.user_avatar}
                sx={{ bgcolor: deepOrange[500] }}
              >
                N
              </Avatar>
            </div>
          ) : (
            <Support></Support>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
