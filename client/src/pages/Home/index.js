import React from "react";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import Contacts from "../../components/Contacts";
import Video from "../../components/Video";
import Page from "../../components/Page";
import Menu from "../../components/Menu";
import Support from "../../components/Support";
import styles from "./Home.module.css";
import classNames from "classnames";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const Home = () => {
  return (
    <>
      <Page>
        <Header>
          <Menu mix="header" links={links}></Menu>
          <Support></Support>
        </Header>
        <MainSection page="home">
          <Logo component="home"></Logo>
          <p className={classNames(styles.text)}>
            Привет. Мы живем в маленьком подмосковном городе и хотим рассказать
            об этом.
          </p>
        </MainSection>
        <Footer>
          <Contacts></Contacts>
          <Video></Video>
        </Footer>
      </Page>
    </>
  );
};

export default Home;
