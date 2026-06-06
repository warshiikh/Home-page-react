import React from "react";
import {  
  Heart,
  User,
  Clock3,
  MessageCircle,
} from "lucide-react";

export default function Cards({ data }) {
  return (
    <>
      <div className="article-cards">

        {data.map((item, index) => (
          <div className="article-card" key={index}>

            <div className="article-image">
              <img src={item.Image} alt="" />
            </div>

            <div className="article-padding">

              <h2>{item.title}</h2>

              <p className="article-subtitle">
                {item.subtitle}
              </p>

              <div className="article-profile">

                <p className="article-icons">
                  <User size={20} />
                  {item.profileName}
                </p>

                <p className="article-icons">
                  <Clock3 size={20} />
                  {item.mints}
                </p>

              </div>

              <div className="article-statistics">

                <div className="article-reaction">

                  <p className="article-icons">
                    <Heart size={20} />
                    {item.likes}
                  </p>

                  <p className="article-icons">
                    <MessageCircle size={20} />
                    {item.coment}
                  </p>

                </div>

                <p className="article-date">
                  Mar 15, 2024
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
      
    </>
  );
}