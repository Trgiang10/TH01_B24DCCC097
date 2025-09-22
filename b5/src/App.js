import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      q: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      answer: "Web UI",
    },
    {
      q: "Ngôn ngữ chính của ReactJS?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      q: "ReactJS do công ty nào phát triển?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook",
    },
  ];

  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (opt) => {
    if (opt === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="App">
      <h2>Bài 5: Quiz App</h2>
      {!finished ? (
        <div>
          <p>
            Câu {current + 1}: {questions[current].q}
          </p>
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              style={{ display: "block", margin: "5px" }}
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <h3>
          Bạn trả lời đúng {score}/{questions.length} câu 🎉
        </h3>
      )}
    </div>
  );
}

export default App;


