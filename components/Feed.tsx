import Post from "@/components/Post";
import React from "react";

const Feed = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
