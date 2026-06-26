import { useState } from "react";

export function StarRating() {
  const ratings = [1, 2, 3, 4, 5];
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const displayRating = hoverRating ? hoverRating : selectedRating;

  function handleMouseEnter(rating: number) {
    setHoverRating(rating);
  }

  function handleMouseLeave() {
    setHoverRating(0);
  }

  return (
    <div>
      {ratings.map((rating) => {
        return (
          <span
            key={rating}
            onClick={() => {
              if (selectedRating == rating) {
                setSelectedRating(0);
              } else {
                setSelectedRating(rating);
              }
            }}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
          >
            {rating <= displayRating ? "⭐" : "☆"}
          </span>
        );
      })}
      <p>Selected Rating : {displayRating}/5</p>
    </div>
  );
}
