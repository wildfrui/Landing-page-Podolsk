import React, { useState } from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import Support from "components/Support";
import Logo from "components/Logo";
import Page from "components/Page";
import { AuthForm } from "components/AuthForm";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const Test = () => {
  // const users = useSelector((state) => state.userState.users);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Page>
        <Menu mix="header" links={links}></Menu>
        <Logo component="header"></Logo>
        <Support></Support>

        <button onClick={() => handleClick()}></button>
        <AuthForm open={open} onClose={handleClose}></AuthForm>
      </Page>
    </>
  );
};

export default Test;
