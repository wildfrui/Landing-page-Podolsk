import React from "react";

type PostI = {
  title: string;
  description: string;
  category: string;
  views: number;
};

const Post = ({ title, description, category, views }: PostI) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{views}</p>
    </div>
  );
};

export default Post;
