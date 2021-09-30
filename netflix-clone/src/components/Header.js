import React from "react";
import "./Header.css";
import { useHistory } from "react-router";
import { Notifications, Redeem } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  const history = useHistory();

  const goTosearchPage = () => {
    history.push("/search");
  };
  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src="/netflix-logo.jpg" alt="" />
      </div>
      <div className="header__navItem">
        <div className="header__navItemList">
          <h3 onClick={goToHomePage}>Home</h3>
          <h3 onClick={goTosearchPage}>Search</h3>
          <h3>Shows</h3>
          <h3>Movies</h3>
          <h3>List</h3>
        </div>
        <div className="header__navItemIcons">
          <h3>Children</h3>
          <Redeem />
          <Notifications />
          <Avatar src="/profile.png" id="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
