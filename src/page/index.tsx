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
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Click Here
      </button>
    </div>
  );
};

