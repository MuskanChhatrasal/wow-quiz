import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div
        className="hero-left"
        style={{ marginLeft: "5rem", marginTop: "-1rem" }}
      >
        <h1>Rules and Regulations</h1>
        <p className="subtitle" style={{ marginBottom: "-1rem" }}>
          1. To Excel In the Quiz you need to score more than 70%
        </p>
        <p className="subtitle" style={{ marginBottom: "-1rem" }}>
          2. Each right answer scores 10 points
        </p>
        <p className="subtitle">3. Each MCQ has only one correct answer</p>
        <Link to="/settings">
          <a className="button btn-primary">Start Quiz</a>
        </Link>
      </div>

      <div className="hero-right">
        <div
          className="hero-img-cont"
          style={{ marginTop: "-1rem", height: "28rem", width: "28rem" }}
        >
          <img
            src="https://cdn.dribbble.com/users/1551941/screenshots/3801673/quizcompleteloop.gif"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
