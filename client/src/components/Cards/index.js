import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Pagination from "@mui/material/Pagination";
import styles from "./Cards.module.css";
import Card from "../Card";
import { xhrGetPosts, xhrPaginatePosts } from "api/postsApi";

const Cards = ({ cards }) => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const getPosts = async () => {
    try {
      const { posts } = await xhrPaginatePosts({ skip, limit: 10 });
      console.log(posts);
      setData([...data, ...posts]);
      setSkip((prev) => prev + 10);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={classnames(styles.cards)}>
      {data?.map((card) => {
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
      <Pagination count={10} color="secondary" />
    </div>
  );
};

export default Cards;
