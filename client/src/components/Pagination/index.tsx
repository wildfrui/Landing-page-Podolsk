import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PaginationI = {
  handleChange: (event: any, value: any) => void;
};

const PaginationApp = ({ handleChange }: PaginationI) => {
  const pageMeta = useSelector((state: any) => state.metaState);
  const dispatch = useDispatch();

  return (
    <Pagination
      count={pageMeta.meta.pageCount}
      onChange={handleChange}
      color="secondary"
      variant="outlined"
      size="large"
    />
  );
};

export default PaginationApp;
