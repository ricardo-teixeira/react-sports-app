import React from "react";
import Breadcrumb from "../breadcrumb";
import Logo from "../logo";
import "./header.css";
import { AppContext } from "../../context";
import UserDrodown from "../user-dropdown";

const Header = () => (
  <header className="app-header">
    <div className="container">
      <div className="app-header-content">
        <Logo />
        <h1 className="app-title">React Sports App</h1>
        <AppContext.Consumer>
          {context => <UserDrodown user={context.state.user} />}
        </AppContext.Consumer>
      </div>
    </div>
    <Breadcrumb />
  </header>
);

export default Header;
