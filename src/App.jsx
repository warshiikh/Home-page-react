import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";

import { Category } from "./components/Category";
import { CategoryCards } from "./components/CategoryCards";

import Title from "./components/Title";
import Cards from "./components/Cards";
import CardsAllArticles from "./components/CardsAllArticles";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"; 
import "./style.css";
import { BookOpen, Code2, Briefcase, Users, Brain } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        <Left />
        <Right />
      </div>
       <div className="CATEGORY-CARDS">

      {/* Categories */}
      <Category
        title="Popular Categories"
        subtitle="Explore our diverse range of educational content"
      />
      
      <CategoryCards
        Cards={[
          {
            icon: <BookOpen size={28} />,
            title: "Education Trends",
            subtitle:
              "Master study techniques and academic success strategies",
            articles: "1 article",
          },
          {
            icon: <Code2 size={28} />,
            title: "Technology & Coding",
            subtitle:
              "Learn programming, web development, and tech skills",
            articles: "1 article",
          },
          {
            icon: <Briefcase size={28} />,
            title: "Skills Development",
            subtitle:
              "Advance your career and professional skills",
            articles: "1 article",
          },
          {
            icon: <Users size={28} />,
            title: "Student Life",
            subtitle:
              "Develop communication and leadership abilities",
            articles: "1 article",
          },
          {
            icon: <Brain size={28} />,
            title: "Learning Strategies",
            subtitle:
              "Self-improvement and mindfulness resources",
            articles: "1 article",
          },
        ]}
      />
       </div>

      {/* Latest Articles */}
      <Title
        title="Latest Articles"
        subtitle="Stay updated with fresh insights and expert perspectives"
      />
    

      <Cards
        data={[
          {
            Image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17CHqHJu2Ma6AWnhegwUl_mkLO67cD9uhJg&s",
            title:
              "The Future of Online Learning: Trends in 2024",
            subtitle:
              "Online education has revolutionized how we learn. With technologies like AI, VR, and interactive platforms.",
            profileName: "Sarah Johnson",
            mints: "8 min read",
            likes: 324,
            coment: 45,
          },
          {
            Image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYLUsAj4JWWsTk767e5a_zAkU1KXbu9mOXw&s",
            title:
              "Mastering Time Management for Students",
            subtitle:
              "Online education has revolutionized how we learn. With technologies like AI, VR, and interactive platforms.",
            profileName: "Sarah Johnson",
            mints: "8 min read",
            likes: 324,
            coment: 45,
          },
        ]}
      />

      <CardsAllArticles
        cards={[
          {
            EducationTrends: "skills development",
            Data: "March 6, 2024",
            Title: "Building Confidence in Public Speaking",
            Desc: "Overcome anxiety and develop powerful presentation skills for your career.",
            profile: "Emily Rodriguez",
            time: "7 min read",
            likes: "Mar 13, 2024",
          },
          {
            EducationTrends: "learning strategies",
            Data: "March 7, 2024",
            Title: "Critical Thinking in the Digital Age",
            Desc: "Develop analytical skills to navigate information overload and make informed decisions.",
            profile: "Michael Parker",
            time: "9 min read",
            likes: "Mar 12, 2024",
          },
          {
            EducationTrends: "technology and coding",
            Data: "March 8, 2024",
            Title: "The Role of Artificial Intelligence in Education",
            Desc: "How AI is revolutionizing personalized learning and adaptive teaching methods.",
            profile: "Dr. Lisa Wang",
            time: "10 min read",
            likes: "Mar 11, 2024",
          },
        ]}
      />
      <Newsletter />
      <Footer
      logo="EduBlog"
      description="Empowering learners and educators worldwide through quality educational content and resources."
    />
    </>
  );
}

export default App;