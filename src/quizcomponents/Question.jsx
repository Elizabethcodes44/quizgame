import PropTypes from 'prop-types';

export default function Question({ question, onAnswerSelect, selectedAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerSelect(option)}
            disabled={!!selectedAnswer}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

// Add PropTypes for validation
Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};
