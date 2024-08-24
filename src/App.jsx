import React, { useState } from 'react';
import Header from './components/Header';

const FeedbackApp = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback) {
      const newReview = { rating, feedback };
      setReviews([newReview, ...reviews]);
      setRating(0);
      setFeedback('');
    }
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = reviews.length ? (totalRating / reviews.length).toFixed(1) : 0;

  return (
    <div className="container">
     <Header/>

      <div className="card">
        <h2>How would you rate your service with us?</h2>
        <ul className="rating">
          {[...Array(10)].map((_, i) => (
            <li key={i}>
              <input 
                type="radio" 
                id={`num${i + 1}`} 
                name="rating" 
                value={i + 1}
                checked={rating === i + 1}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Write a review" 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
          />
          <button className="btn btn-primary" onClick={handleSubmit}>Send</button>
        </div>
      </div>

      <div className="feedback-stats">
        <h4>{reviews.length} Reviews</h4>
        <h4>Average Rating: {averageRating}</h4>
      </div>

      {reviews.map((review, index) => (
        <div className="card reverse" key={index}>
          <div className="num-display">{review.rating}</div>
          <div className="text-display">{review.feedback}</div>
          <button className="close" onClick={() => handleDelete(index)}>
            <span role="img" aria-label="close">❌</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default FeedbackApp;
