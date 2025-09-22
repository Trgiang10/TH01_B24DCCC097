import React, { useState } from "react";
import "./App.css";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        border: "1px solid black",
        marginTop: "10px",
      }}
    ></div>
  );
}

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="App">
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
