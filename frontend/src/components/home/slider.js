import React from "react";
import { HashLink } from "react-router-hash-link";
import CreateProjectGif from "../../assets/images/create-project.gif";
import CreateTaskGif from "../../assets/images/create-task.gif";
import TaskCompletionGif from "../../assets/images/task-completion.gif"
import AssignTaskGif from "../../assets/images/assign-task.gif"

const Slider = (props) => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slides">
          <div id="slides__1" className="slide">
            <div className="slide-content">
              <img className="instructions-gif"src={CreateProjectGif} />
              <p className="slide__text">
                Create a Project to keep track of your Progress!
              </p>
            </div>
            <HashLink
              className="slide__prev"
              to="#slides__4"
              title="Next"
            ></HashLink>
            <HashLink
              className="slide__next"
              to="#slides__2"
              title="Next"
            ></HashLink>
          </div>
          <div id="slides__2" className="slide">
            <div className="slide-content">
              <img className="instructions-gif"src={CreateTaskGif} />
              <p className="slide__text">
                Create a Task to add to your Project
              </p>
            </div>
            <HashLink
              className="slide__prev"
              to="#slides__1"
              title="Prev"
            ></HashLink>
            <HashLink
              className="slide__next"
              to="#slides__3"
              title="Next"
            ></HashLink>
          </div>
          <div id="slides__3" className="slide">
            <div className="slide-content">
              <img className="instructions-gif"src={TaskCompletionGif} />
              <p className="slide__text">
                Check Off a Task to track Completion
              </p>
            </div>
            <HashLink
              className="slide__prev"
              to="#slides__2"
              title="Prev"
            ></HashLink>
            <HashLink
              className="slide__next"
              to="#slides__4"
              title="Next"
            ></HashLink>
          </div>
          <div id="slides__4" className="slide">
            <div className="slide-content">
              <img className="instructions-gif"src={AssignTaskGif} />
              <p className="slide__text">Assign a Task to a User</p>
            </div>
            <HashLink
              className="slide__prev"
              to="#slides__3"
              title="Prev"
            ></HashLink>
            <HashLink
              className="slide__next"
              to="#slides__1"
              title="Prev"
            ></HashLink>
          </div>
        </div>
        {/* <div className="slider__nav"> */}
        {/* <HashLink className="slider__navlink" to="#slides__1"></HashLink>
          <HashLink className="slider__navlink" to="#slides__2"></HashLink>
          <HashLink className="slider__navlink" to="#slides__3"></HashLink>
          <HashLink className="slider__navlink" to="#slides__4"></HashLink> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slider;
