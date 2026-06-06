export const CategoryCards = ({ Cards }) => {
  return (
    <div className="category-cards">

      {Cards.map((item, index) => {
        return (

          <div className="category-card" key={index}>

            <div className="category-card-top">

              <div className="category-icon">
                {item.icon}
              </div>

              <span className="category-article">
                {item.articles}
              </span>

            </div>

            <h2>{item.title}</h2>

            <p>{item.subtitle}</p>

            <button className="category-btn">
              Explore category
            </button>

          </div>

        );
      })}

    </div>
  );
};