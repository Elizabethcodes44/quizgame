# Elizabeth's Simple Quiz Game
A simple quiz game where players can test their knowledge on various topics. The game consists of multiple-choice questions, a timer for each question, and a leaderboard to track high scores. Players can answer the questions, see if they're correct, and move on to the next question. At the end of the quiz, the player's score is displayed along with the leaderboard.

Features
Multiple Choice Questions: A set of predefined questions with multiple-choice options.
Timer: Each question has a 15-second timer to answer.
Feedback: After answering each question, the player gets immediate feedback: "Correct!" or "Oops! You are wrong."
Score Tracking: The player’s score is updated after each question.
Leaderboard: The top 5 high scores are stored and displayed at the end of the quiz.
Responsive Design: The game is mobile-friendly and looks great on all devices.
Technologies Used
React: JavaScript library for building user interfaces.
CSS: For styling and creating the layout of the game.
PropTypes: For prop validation in React components.
LocalStorage: For storing high scores persistently.
Installation
To run this quiz game locally on your machine, follow the steps below:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/quiz-game.git
Navigate to the project folder:

bash
Copy code
cd quiz-game
Install the required dependencies:

If you're using npm:

bash
Copy code
npm install
Or if you're using yarn:

bash
Copy code
yarn install
Start the development server:

bash
Copy code
npm start
Or:

bash
Copy code
yarn start
Open the game in your browser at http://localhost:3000/.

How to Play
When the game starts, a question is displayed with multiple answer options.
You have 15 seconds to select an answer.
After selecting an answer, you'll get immediate feedback (Correct or Incorrect).
The next question will appear automatically, or you can click "Next Question" if you've selected an answer.
At the end of the quiz, your score is displayed, and the top 5 high scores are shown in the leaderboard.
You can play the quiz again or exit.
Game Flow
Question Display: Each question is shown with multiple-choice options.
Timer: A 15-second countdown is displayed for each question.
Answer Selection: Select an answer by clicking the option.
Feedback: Get feedback on whether your answer was correct or wrong.
Next Question: Move to the next question (or finish the quiz if it's the last one).
Leaderboard: After completing the quiz, your score is stored, and the top 5 scores are shown.
