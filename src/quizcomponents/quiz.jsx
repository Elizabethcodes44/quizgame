import { useState } from "react";
import questionsdata from "./questions.json";
import ".quiz.css";
import Question from './Question.jsx';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const hanldeAnswerSelect = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questionsdata[currentQuestion].answer;
    setFeedback(isCorrect ? "Correct! Welldone" : "OOPS! You are wrong");
    if (isCorrect) {
      setScore(score + 1);
    }

  
  };
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const GameOver = currentQuestion >= questionsdata.length;
  return (
    <div className="quizContainer">
      {GameOver ? (
        <div className="quizend">
          <h2>Quiz Completed</h2>
          <p>
            Your score: {score} / {questionsdata.length}
          </p>
        </div>
      ) : (
        <>
          <Question
            question={questionsdata[currentQuestion]}
            onAnswerSelect={hanldeAnswerSelect}
            selectedAnswer={selectedAnswer}
          />
          {feedback && (
            <p className={feedback === "Correct!" ? "correct" : "incorrect"}>
              {feedback}
            </p>
          )}
          {selectedAnswer && (
            <button className="next-btn" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
}
