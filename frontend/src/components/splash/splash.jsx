import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../home/Home";

const Splash = ({ currentUser, login, history }) => {
  const splashContent = () => {
    return (
      <>
        <div className="splash-container">
          <p>Welcome to Miles-Map..</p>
          <p>..to continue, please login..</p>
        </div>
        <div className="splash-frame"></div>
        <div className="splash-stage">
          <div className="splash-box">
            <div className="splash-in splash-one">
              <h3>Miles-Map</h3>
              <p>
              Miles-Map is a streamlined project management tool that lets users easily plan, organize, and monitor all their projects and tasks in one place.
              </p>
            </div>
          </div>
          <div className="splash-box">
            <div className="splash-in splash-two">
              <h3>Create Projects</h3>
              <p>
              Create projects effortlessly. Simplify your workflow by initiating new projects and breaking them down into manageable parts.</p>
            </div>
          </div>
          <div className="splash-box">
            <div className="splash-in splash-four">
              <h3>Add Tasks</h3>
              <p>
              Add tasks seamlessly. Make your life easier by dividing projects into actionable steps and marking tasks as you complete them.
              </p>
            </div>
          </div>
          <div className="splash-box">
            <div className="splash-in splash-three">
              <h3>Assign Tasks</h3>
              <p>
              Take charge. Keep everything organized by distributing tasks to yourself and your team members.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const homeContent = () => {
    return <Home />;
  };

  return currentUser ? homeContent() : splashContent();
};

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default withRouter(connect(msp)(Splash));
