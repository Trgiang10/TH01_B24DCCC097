import React, { useState } from "react";

function QuizApp() {
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
  const [answered, setAnswered] = useState(0);

  const checkAnswer = (q, opt) => {
    if (opt === q.answer) setScore(score + 1);
    setAnswered(answered + 1);
  };

  return (
    <div>
      <h2>Bài 5: Quiz App</h2>
      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.q}</p>
          {q.options.map((opt, j) => (
            <button key={j} onClick={() => checkAnswer(q, opt)}>
              {opt}
            </button>
          ))}
        </div>
      ))}
      {answered === questions.length && (
        <h3>Bạn trả lời đúng {score}/{questions.length} câu</h3>
      )}
    </div>
  );
}

export default QuizApp;
