import React from "react";
import { ChevronRight } from "lucide-react";

export default function Title({
  title,
  subtitle,
}) {
  return (
    <>
      <div className="article-title-container">

        <div className="article-title-content">

          <h1>{title}</h1>

          <p>{subtitle}</p>

        </div>

        <button className="article-view-btn">
          View all articles
          <ChevronRight size={18} />
        </button>

      </div>
    </>
  );
}