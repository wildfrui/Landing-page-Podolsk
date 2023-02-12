import React from "react";
import Cards from "components/Cards";
import MainSection from "components/MainSection";
import MainLayout from "layouts/MainLayout";

const Events = () => {
  return (
    <MainLayout>
      <MainSection page="events">
        <Cards category="events"></Cards>
      </MainSection>
    </MainLayout>
  );
};

export default Events;
