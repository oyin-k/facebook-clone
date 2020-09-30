import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";
import Post from "./Post";
import db from "../services/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) => {
          const allPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(allPosts);
        },
        (err) => {
          console.log(err);
        }
      );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
