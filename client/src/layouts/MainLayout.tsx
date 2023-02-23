import React, { ReactNode } from "react";
import Contacts from "components/Contacts";
import Footer from "components/Footer";
import Header from "components/Header";
import Logo from "components/Logo";
import Menu from "components/Menu";
import Page from "components/Page";
import Support from "components/Support";


interface MainLayoutI {
  children: ReactNode;
  noLogo?: boolean;
}

const MainLayout = ({ children, noLogo = false }: MainLayoutI) => {
  // const users = useSelector((state) => state.userState.users);

  return (
    <Page>
      <Header solid></Header>
      {children}
      <Footer>
        <Contacts></Contacts>
      </Footer>
    </Page>
  );
};

export default MainLayout;
