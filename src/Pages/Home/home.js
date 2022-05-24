import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { async } from "@firebase/util";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <section className="hero">
      <div
        className="hero-left"
        style={{ marginLeft: "5rem", marginTop: "-1rem" }}
      >
        <h1>WOW QUIZ</h1>
        <p className="subtitle" style={{ marginBottom: "1rem" }}>
          If you want to check your general Knowledge then this is the best
          place. Wow quiz is a platform where you can check your general
          knoledge which includes Social Knowledge, Entertainment Knowledge,
          Nature Knowledge, Sports Knowledge and many more.
        </p>
        {user ? (
          <Link to="/rules">
            <a className="button btn-primary">Start Quiz</a>
          </Link>
        ) : (
          <Link to="/login">
            <a className="button btn-primary">Start Quiz</a>
          </Link>
        )}
      </div>

      <div className="hero-right">
        <div
          className="hero-img-cont"
          style={{ marginTop: "-1rem", height: "25rem", width: "25rem" }}
        >
          <img
            src="https://media4.giphy.com/media/4bi9ZFzHhroNrFmSsi/giphy.gif?cid=790b7611268c77adca1a7dcd375408310bccfc4dfc812eb3&rid=giphy.gif&ct=g"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
