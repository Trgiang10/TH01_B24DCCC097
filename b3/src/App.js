import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { name: "Sách", price: 100000 },
    { name: "Bút", price: 50000 },
    { name: "Vở", price: 70000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="App">
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {products.map((p, i) => (
        <div key={i}>
          {p.name} - {p.price}đ{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}
      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((p, i) => (
          <li key={i}>{p.name} - {p.price}đ</li>
        ))}
      </ul>
      <p>Tổng tiền: {total}đ</p>
    </div>
  );
}

export default App;

