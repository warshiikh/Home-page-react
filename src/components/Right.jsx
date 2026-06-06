function Right() {
  return (
    <div className="right">
      <img
        src="https://edu-blog-gamma.vercel.app/learning-hero.jpg"
        alt="students"
      />

      <div className="hero-card hero-top-card">
        <h5>Expert Authors</h5>
        <p style={{ color: 'gray', fontSize: '0.9rem', marginTop: '0.5rem' }}>Learn from industry professionals</p>
      </div>

      <div className="hero-card hero-bottom-card">
        <h5>Curated Topics</h5>
        <p style={{ color: 'gray', fontSize: '0.9rem', marginTop: '0.5rem' }}>Handpicked resources for you</p>
      </div>

    </div>
  );
}

export default Right;