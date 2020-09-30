import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
      <Post
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        message="Thisis how it shows on the screen"
        timestamp="timestamp"
        username="Oyinkan"
        image="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
      />
    </div>
  );
}

export default Feed;
