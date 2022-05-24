import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/rules");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="wrapper" style={{ marginLeft: "30rem", height: "22rem" }}>
      <h2 style={{ fontSize: "2rem", marginTop: "-2.5rem" }}>Sign-Up</h2>
      {error && <span style={{ color: "red" }}>{error}</span>}

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your email"
            // value={userDetails.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Create password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type="Submit"
            value="Register Now"
            className="button btn-primary "
          />
        </div>
        <div className="text">
          <h3 style={{ marginLeft: "0.2rem" }}>
            Already have an account?
            <Link to="/login">
              <a style={{ color: "black" }}>Login now</a>
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;
