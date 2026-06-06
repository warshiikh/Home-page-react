import { ArrowRight } from "lucide-react";

export const Category = ({ title, subtitle }) => {
  return (
    <div className="category-header">

      <div className="category-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <button className="category-btn">
        View all articles
        <ArrowRight size={18} />
      </button>

    </div>
  );
};