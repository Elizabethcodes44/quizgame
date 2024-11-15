import { useState, useEffect } from "react";
import questionsdata from "./questions.json";
import Question from './Question.jsx';
import './quiz.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(15); // 15-second timer
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("highScores")) || []
  );
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Add state to track if quiz is finished

  useEffect(() => {
    if (timer === 0 && !isQuizFinished) {
      handleNextQuestion();
    }
    const countdown = setInterval(() => {
      if (!isQuizFinished) {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer, isQuizFinished]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questionsdata[currentQuestion].answer;
    setFeedback(isCorrect ? "Correct! Well done" : "Oops! You are wrong");
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1); // Update score based on previous score
    }
  };

  const handleNextQuestion = () => {
    // If it's the last question, save high score and stop the quiz
    if (currentQuestion < questionsdata.length - 1) {
      setSelectedAnswer(null);
      setFeedback("");
      setTimer(15);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      saveHighScore();  // Save high score and stop quiz
      setIsQuizFinished(true); // Mark quiz as finished
    }
  };

  const saveHighScore = () => {
    const newScore = { score, date: new Date().toLocaleString() };
    const updatedScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 5); // Top 5
    setHighScores(updatedScores);
    localStorage.setItem("highScores", JSON.stringify(updatedScores));
  };

  const GameOver = isQuizFinished || currentQuestion >= questionsdata.length;  // Game over if quiz is finished

  return (
    <div className="quizContainer">
      {GameOver ? (
        <div className="quizEnd">
          <h2>Quiz Completed</h2>
          <p>Your score: {score} / {questionsdata.length}</p>
          <h3>Leaderboard:</h3>
          <ul>
            {highScores.map((entry, index) => (
              <li key={index}>
                {entry.score} points on {entry.date}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="timer">Time left: {timer} seconds</div>
          <Question
            question={questionsdata[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
          />
          {feedback && (
            <p className={feedback === "Correct! Well done" ? "correct" : "incorrect"}>
              {feedback}
            </p>
          )}
          {selectedAnswer && (
            <button className="next-btn" onClick={handleNextQuestion}>
              {currentQuestion === questionsdata.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
