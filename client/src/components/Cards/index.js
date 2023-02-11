import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Cards.module.css";
import Card from "../Card";
import { xhrGetPosts } from "api/postsApi";

const Cards = ({ cards }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { posts } = await xhrGetPosts();
      console.log(posts);
      setPosts(posts);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className={classnames(styles.cards)}>
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
    </section>
  );
};

export default Cards;
