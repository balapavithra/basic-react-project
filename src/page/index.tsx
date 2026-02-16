import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Our Website</h1>
      <p>
        This is the Home Page of our React application.
        Click the button below.
      </p>

      <button
        onClick={() => navigate("/task")}
        className="btn"
      >
        Click Here
      </button>
    </div>
  );
};

