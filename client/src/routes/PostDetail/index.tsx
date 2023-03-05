import React, { useEffect, useState } from "react";
import cn from "classnames";
import { xhrGetOnePost } from "api/postsApi";
import { useParams } from "react-router-dom";
import { PostResponse } from "types/PostResponse";
import MainLayout from "layouts/MainLayout";
import MainSection from "components/MainSection";
import { changeDateFormatForTitle } from "utils";
import styles from "./PostDetail.module.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

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
      {/* <div className={styles.background}></div> */}
      <MainSection page="postDetail">
        <div>
          <div className={styles.post}>
            <div className={styles.background}>
              <h1 className={styles.title}>{post.postTitle}</h1>
            </div>
            <p className={styles.description}>{post.postDescription}</p>
            <div className={styles.info}>
              <p className={cn(styles.published, styles.category)}>
                Контроль таможенной стоимости
              </p>
              <div className={styles.meta}>
                <p className={styles.published}>
                  Дата публикации {changeDateFormatForTitle(post.createdAt)}
                </p>
                <p className={styles.author}>{post.author?.name}</p>
                <Avatar
                  className={styles.user_avatar}
                  sx={{ bgcolor: deepOrange[500] }}
                  src="http://localhost:5000/b2b43120-009f-4776-bbf1-4fe8f2658e00.jpg"
                >
                  {post.author?.name.slice(0, 1)}
                </Avatar>
              </div>
            </div>
            <div className={styles.article}>
              {post?.body?.map((obj) => (
                <>
                  {obj.type === "image" && (
                    <div className={styles.img}>
                      <img src={obj.data.file.url} alt={obj.data.caption} />
                      {obj.data.caption && (
                        <p className={styles.caption}>{obj.data.caption}</p>
                      )}
                    </div>
                  )}
                  {obj.type === "paragraph" && <p>{obj.data.text}</p>}
                </>
              ))}
            </div>
          </div>
        </div>
      </MainSection>
    </MainLayout>
  );
};

export default PostDetail;
