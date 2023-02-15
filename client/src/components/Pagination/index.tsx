import { Pagination } from "@mui/material";
import React, { useState } from "react";

type PaginationI = {
  pageCount: number;
};

const PaginationApp = ({ pageCount }: PaginationI) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  return (
    <Pagination
      count={pageCount}
      onChange={handleChange}
      color="secondary"
      variant="outlined"
      size="large"
    />
  );
};

export default PaginationApp;
