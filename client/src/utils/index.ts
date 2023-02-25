import dayjs from "dayjs";
import { DateFormats } from "enums/DateFormats";

export const changeDateFormatForTitle = (date: string): string => {
  return dayjs(date).format(DateFormats.TITLE_DATE_FORMAT);
};

export const getUserInfoFromLs = () => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    return JSON.parse(userInfo);
  }

  return null;
};
