import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Pagination from "@mui/material/Pagination";
import Masonry from "@mui/lab/Masonry";
import Card from "../Card";
import { xhrPaginatePosts } from "api/postsApi";
import styles from "./Cards.module.css";

const Cards = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);

  const getPosts = async () => {
    try {
      const { data, meta } = await xhrPaginatePosts({
        take: 10,
        page,
        category,
      });
      console.log(data, meta);
      setPosts(data);
      setMeta(meta);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <div className={classnames(styles.container)}>
      {/* <div className={classnames(styles.cards)}>
        {posts?.map((card) => {
          return (
            <Card
              title={card.postTitle}
              text={card.postDescription}
              image="url(/images/cafe.jpg)"
              id={card.id}
              component="content"
            ></Card>
          );
        })}
      </div> */}
      <Masonry columns={2} spacing={2}>
        {posts.map((card) => (
          <Card
            title={card.postTitle}
            text={card.postDescription}
            image="url(/images/cafe.jpg)"
            id={card.id}
            component="content"
          ></Card>
        ))}
      </Masonry>

      <div className={classnames(styles.pagination)}>
        <Pagination
          count={meta.pageCount}
          onChange={handleChange}
          color="secondary"
          variant="outlined"
          size="large"
        />
      </div>
    </div>
  );
};

export default Cards;
