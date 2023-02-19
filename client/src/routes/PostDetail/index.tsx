import { xhrGetOnePost } from "api/postsApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostResponse } from "types/PostResponse";
import MainLayout from "layouts/MainLayout";
import styles from "./PostDetail.module.css";
import MainSection from "components/MainSection";
import { changeDateFormatForTitle } from "utils";

type Props = {};

const PostDetail = (props: Props) => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostResponse>({} as PostResponse);

  useEffect(() => {
    const getPost = async () => {
      const post = await xhrGetOnePost(Number(postId));
      console.log(post);
      setPost(post);
    };
    try {
      getPost();
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <MainLayout>
      <div className={styles.background}></div>
      <MainSection page="postDetail">
        <div>
          <div className={styles.post}>
            <h1 className={styles.title}>{post.postTitle}</h1>
            <p className={styles.description}>{post.postDescription}</p>
            <p className={styles.published}>
              Дата публикации {changeDateFormatForTitle(post.createdAt)}
            </p>
            <div className={styles.article}></div>
          </div>
        </div>
      </MainSection>
    </MainLayout>
  );
};

export default PostDetail;
