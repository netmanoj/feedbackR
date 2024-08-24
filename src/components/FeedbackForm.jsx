import React, { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [rating, setRating] = useState(1);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rating, feedback);
    setRating(1);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div className="rating-group">
        <label>Rate:</label>
        {[...Array(10)].map((_, i) => (
          <label key={i + 1}>
            <input
              type="radio"
              name="rating"
              value={i + 1}
              checked={rating === i + 1}
              onChange={() => setRating(i + 1)}
            />
            {i + 1}
          </label>
        ))}
      </div>
      <div className="feedback-group">
      
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
