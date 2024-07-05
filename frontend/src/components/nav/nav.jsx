import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/miles-map-logo.png";
import { logout } from "../../actions/sessionActions";
import { openModal } from "../../actions/modalActions";
import PermanentDrawer from "../permanentDrawer/PermanentDrawer";
import { FaUserCircle } from "react-icons/fa";
import Modal from "../modal/Modal";

const Nav = (props) => {
  const { loggedIn, logout, openModal } = props;

  const openLoginModal = () => {
    return (e) => {
      e.preventDefault();
      openModal({ type: "login" });
    };
  };

  const loginButton = () => {
    return (
      <FaUserCircle
        id="user-icon"
        onClick={openLoginModal("login")}
        size={55}
      />
    );
  };

  const logoutButton = () => {
    return (
      <div className="logout-button" onClick={logout}>
        Logout
      </div>
    );
  };

  return (
    <div className={loggedIn ? "main-container" : "main-container-no-margin"}>
      <header className="nav-header-container">
        <div className="nav-left">
          <Link to="/">
            <div className="miles-map-logo-container">
              <img id="miles-map-logo" src={logo} alt="miles-map-logo" />
            </div>
          </Link>
        </div>

        <div className="nav-right">
          <Modal />
          {loggedIn ? logoutButton() : loginButton()}
        </div>
      </header>
    </div>
  );
};

{
  /* {loggedIn ? <PermanentDrawer /> : null} */
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (formType) => dispatch(openModal(formType)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
