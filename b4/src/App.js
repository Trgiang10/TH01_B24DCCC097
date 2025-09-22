import React, { useState } from "react";
import "./App.css";

function Post({ text }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}

export default App;

