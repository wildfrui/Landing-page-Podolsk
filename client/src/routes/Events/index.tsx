import Cards from "components/Cards";
import Contacts from "components/Contacts";
import Footer from "components/Footer";
import Header from "components/Header";
import Logo from "components/Logo";
import MainSection from "components/MainSection";
import Menu from "components/Menu";
import Page from "components/Page";
import Support from "components/Support";
import React from "react";

type Props = {};

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const Events = (props: Props) => {
  return (
    <>
      <Page>
        <Header solid>
          <Menu links={links} mix="header"></Menu>
          <Logo component="header"></Logo>
          <Support></Support>
        </Header>
        <MainSection page="stories">
          {/* <Title
        text="Истории, рассказанные городом и пропитанные историей в 241 год"
        page="stories"
      ></Title> */}
          <Cards category="events"></Cards>
        </MainSection>

        <Footer>
          <Contacts></Contacts>
        </Footer>
      </Page>
    </>
  );
};

export default Events;
