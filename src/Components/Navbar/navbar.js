import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
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

  const logout = () => {
    return signOut(auth);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      className="header cont-shadow"
      style={{ width: "96rem", backgroundColor: "white" }}
    >
      <div className="logos">
        <Link to="/">
          <a>
            W <span className="logos-o">O</span>W Quiz
            <span className="logos-excla">!</span>
          </a>
        </Link>
      </div>

      <ul className="header-nav">
        <li style={{ marginTop: "0.75rem", cursor: "pointer" }}>
          {!user ? <i class="fas fa-user-alt"></i> : `Hello, ${user.email}`}
        </li>
        <li
          style={{
            cursor: "pointer",
            color: "white",
          }}
        >
          {user ? (
            <a
              onClick={handleLogout}
              style={{
                border: "1px solid black",
                color: "var(--primary-color)",
              }}
            >
              <i
                class="fas fa-sign-out-alt"
                style={{
                  marginRight: "0.5rem",
                  color: "black",
                }}
              ></i>
              Logout
            </a>
          ) : (
            <Link
              to="/login"
              style={{
                color: "var(--primary-color)",
                border: "1px solid black",
              }}
            >
              <i
                class="fas fa-sign-in-alt"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Login
            </Link>
          )}
        </li>
        <li>
          <button className="menu">
            <i className="bi bi-list"></i>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
