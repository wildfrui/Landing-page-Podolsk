import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Title from "../../components/Title";
import Cards from "../../components/Cards";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Contacts from "../../components/Contacts";
import Menu from "../../components/Menu";
import Support from "../../components/Support";
import Logo from "../../components/Logo";
import Page from "../../components/Page";

import { getUsers } from "../../thunks/userThunks.ts";
import { useDispatch, useSelector } from "react-redux";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const stories = [
  {
    title: "Открытие кафе на аллее",
    text: "Открылось новое фешенебельное кафе в центр города",
    image: "url(/images/cafe.jpg)",
    id: "1",
    component: "content",
  },
  {
    title: "Жемчужина Подмосковья",
    text: "Взгляд изнутри на самую красивую церковь города",
    image: "url(/images/dubro.jpeg)",
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
    title: "Образование доступно",
    text: "Новые школы в Кузнечиках предоставят детям возможность выбирать специализацию",
    image: "url(/images/school.jpeg)",
    id: "4",
    component: "content",
  },
  {
    title: "Места отдыха",
    text: "Где отдохнуть в Подольске с родными и близкими",
    image: "url(/images/school.jpeg)",
    id: "5",
    component: "content",
  },
  {
    title: "Горит история",
    text: "Как пожар на Зингере повлияет на безопасность промышленности в городе",
    image: "url(/images/zinger.jpeg)",
    id: "6",
    component: "content",
  },
  {
    title: "Места отдыха",
    text: "Где отдохнуть в Подольске с родными и близкими",
    image: "url(/images/school.jpeg)",
    id: "7",
    component: "content",
  },
  {
    title: "Горит история",
    text: "Как пожар на Зингере повлияет на безопасность промышленности в городе",
    image: "url(/images/zinger.jpeg)",
    id: "8",
    component: "content",
  },
];

const Stories = () => {
  // const users = useSelector((state) => state.userState.users);

  return (
    <>
      <Page>
        <Header solid>
          <Menu mix="header" links={links}></Menu>
          <Logo component="header"></Logo>
          <Support></Support>
        </Header>
        <MainSection page="stories">
          {/* <Title
            text="Истории, рассказанные городом и пропитанные историей в 241 год"
            page="stories"
          ></Title> */}
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
