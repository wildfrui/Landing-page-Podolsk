import React from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Title from "../components/Title";
import Cards from "../components/Cards";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Menu from "../components/Menu";
import Support from "../components/Support";
import Logo from "../components/Logo";
import Page from "../components/Page";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const stories = [
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "1",
    component: "content",
  },
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "2",
    component: "content",
  },
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "3",
    component: "content",
  },
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "4",
    component: "content",
  },
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "5",
    component: "content",
  },
  {
    title: "Новостройки Подольска",
    text: "Как за несколько лет поменялся ландшафт города",
    image: "url(/images/newhouse.jpeg)",
    id: "6",
    component: "content",
  },
];

const Stories = () => {
  return (
    <>
      <Page>
        <Header solid>
          <Menu mix="header" links={links}></Menu>
          <Logo component="header"></Logo>
          <Support></Support>
        </Header>
        <MainSection>
          <Title
            text="Истории, рассказанные городом и пропитанные историей в 241 год"
            page="stories"
          ></Title>
          <Cards cards={stories}></Cards>
        </MainSection>
        <Footer>
          <Contacts></Contacts>
        </Footer>
      </Page>
    </>
  );
};

export default Stories;
