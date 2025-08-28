import React from "react";

function Rating({ value = 0, count = 0 }) {
  const filledStars = Math.round(value);
  return (
    <div className="rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={`rating-star ${i < filledStars ? "filled" : "empty"}`}>
          ★
        </span>
      ))}
      <span className="rating-count">{count}</span>
    </div>
  );
}

export default Rating;


