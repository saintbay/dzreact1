import React, { useState } from "react";
import PostList from "./PostList";
import NewPost from "./NewPost";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    const newPost = {
      author: "Amigo", 
      content,
      time: Date.now(),
    };
    setPosts([newPost, ...posts]); 
  };

  return (
    <div style={styles.container}>
      <h1>Prototype vk</h1>
      <NewPost onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    
  },
};

export default App;
