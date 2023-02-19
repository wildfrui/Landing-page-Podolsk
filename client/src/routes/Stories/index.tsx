import React from "react";
import MainSection from "../../components/MainSection";
import Cards from "../../components/Cards";
import MainLayout from "layouts/MainLayout";

const Stories = () => {
  return (
    <MainLayout noLogo>
      <MainSection page="stories">
        <Cards category="stories"></Cards>
      </MainSection>
    </MainLayout>
  );
};

export default Stories;
