import React, { ChangeEvent, useState } from "react";
import Input from "@mui/material/Input";
import styles from "./PostPanel.module.css";
import { xhrUploadImage } from "api/imageApi";
import { useDispatch } from "react-redux";
import { addCover } from "actions/postActions";

type Props = {};

const CoverСhoice = (props: Props) => {
  const [file, setFile] = useState<File>();
  const dispatch = useDispatch();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
      dispatch(addCover(e.target.files[0]));
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    try {
      const result = await xhrUploadImage(file);
      console.log(result);
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(file);
  return (
    <div>
      <h3 className={styles.title}>Выбор обложки</h3>
      <Input type="file" onChange={handleFileChange}></Input>
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
};

export default CoverСhoice;
