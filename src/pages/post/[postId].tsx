import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  console.log(postId);

  return <p>Post id: {postId}</p>;
};

export default Post;

