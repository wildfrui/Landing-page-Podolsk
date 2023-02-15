import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Masonry from "@mui/lab/Masonry";
import Card from "../Card";
import PaginationApp from "components/Pagination";

import { xhrPaginatePosts } from "api/postsApi";
import styles from "./Cards.module.css";

const Cards = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({});

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
      <PaginationApp pageCount={meta.pageCount}></PaginationApp>
    </div>
  );
};

export default Cards;
