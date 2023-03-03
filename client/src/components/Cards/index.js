import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import Masonry from "@mui/lab/Masonry";
import Card from "../Card";
import PaginationApp from "components/Pagination";

import { xhrPaginatePosts } from "api/postsApi";
import { setMeta } from "actions/metaActions";
import styles from "./Cards.module.css";

const Cards = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const pageMeta = useSelector((state) => state.metaState);
  const dispatch = useDispatch();

  const getPosts = async () => {
    try {
      const { data, meta } = await xhrPaginatePosts({
        take: 10,
        page,
        category,
      });

      setPosts(data);
      dispatch(setMeta(meta));
    } catch (err) {
      console.warn(err);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
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
            key={card.id}
            title={card.postTitle}
            text={card.postDescription}
            image="url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
            id={card.id}
            component="content"
          ></Card>
        ))}
      </Masonry>
      <PaginationApp handleChange={handleChange}></PaginationApp>
    </div>
  );
};

export default Cards;
