import React, { useState } from "react";
import { Heart, User, Clock3 } from "lucide-react";

export default function CardsAllArticles({ cards }) {
  const [liked, setLiked] = useState([]);

  const handleLike = (index) => {
    if (liked.includes(index)) {
      setLiked(liked.filter((item) => item !== index));
    } else {
      setLiked([...liked, index]);
    }
  };

  return (
    <div className="article-cards-two">
      {cards.map((item, index) => (
        <div className="article-card-two" key={index}>
          
          <div className="article-view-two">
            <p className="article-education-two">
              {item.EducationTrends}
            </p>

            <p className="article-data-two">
              {item.Data}
            </p>
          </div>

          <div className="article-content-two">
            <h1>{item.Title}</h1>
            <p>{item.Desc}</p>
          </div>

          <div className="article-profile-two">
            
            <p className="article-icons-two">
              <User size={20} />
              {item.profile}
            </p>

            <p className="article-icons-two">
              <Clock3 size={20} />
              {item.time}
            </p>

            <p className="article-icons-two">
              <Heart
                size={20}
                fill={
                  liked.includes(index)
                    ? "red"
                    : "none"
                }
                onClick={() => handleLike(index)}
                style={{
                  color: liked.includes(index)
                    ? "red"
                    : "grey",
                  cursor: "pointer",
                }}
              />

              {item.likes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}