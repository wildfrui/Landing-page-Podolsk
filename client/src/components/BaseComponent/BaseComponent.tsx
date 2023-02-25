import { xhrAuthUser } from "api/userApi";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  children: ReactNode;
};

const BaseComponent = ({ children }: Props) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     const userInfo = await xhrAuthUser();
  //     console.log(userInfo);
  //     dispatch(setUserInfo(userInfo));
  //   };
  //   fetchUserInfo();
  // }, []);

  return <div>{children}</div>;
};

export default BaseComponent;
