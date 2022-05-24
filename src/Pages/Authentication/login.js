import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/rules");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div
      className="wrapper login-wrapper"
      style={{ marginLeft: "30rem", marginTop: "7rem" }}
    >
      <h2 style={{ fontSize: "2rem" }}>Login</h2>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <input
              type="Submit"
              value="Login Now"
              className="button btn-primary"
            />
          </div>
        </div>
        <div
          className="text"
          style={{ marginTop: "2rem", marginLeft: "-1rem" }}
        >
          <h3>
            Not having an account?
            <Link to="/signup">
              <a style={{ color: "black" }}>Signup now</a>
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
