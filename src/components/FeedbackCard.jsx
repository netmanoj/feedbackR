import React from 'react';

function FeedbackCard({ rating, feedback, onRemove }) {
  return (
    <div className="feedback-card">
      <div className="rating-circle">{rating}</div>
      <div className="feedback-content">
        <p>{feedback}</p>
        <button className="remove-btn" onClick={onRemove}>x</button>
      </div>
    </div>
  );
}

export default FeedbackCard;
