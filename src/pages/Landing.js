import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="landing-page">
        <div className="landing-page-container">
          <div>
            <h1>WRITING BOOTH</h1>
          </div>
          <div className={"support-text"}>
            <div>
              <p>Write</p>
              <p>Share comments</p>
            </div>
            <div className="buttons-container">
              <button
                className={"action-buttons user-action"}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={"action-buttons user-action"}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
