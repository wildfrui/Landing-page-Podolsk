import React from "react";
import classNames from "classnames";
import MainSection from "components/MainSection";
import Logo from "components/Logo";
import Video from "components/Video";

import MainLayout from "layouts/MainLayout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <MainLayout noLogo>
      <MainSection page="home">
        <Logo component="home"></Logo>
        <p className={classNames(styles.text)}>
          Привет. Мы живем в маленьком подмосковном городе и хотим рассказать об
          этом.
        </p>
        <Video></Video>
      </MainSection>
    </MainLayout>
  );
};

export default Home;
