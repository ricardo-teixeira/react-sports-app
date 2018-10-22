import React, { Component } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Section from "../components/section";
import UsersListing from "../components/users-listing";
import RegistrationForm from "../components/registration-form";
import Topics from "../components/topics";
import { AppContext } from "../context";

class Home extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <React.Fragment>
            <Header />
            <Banner />
            <div className="container">
              <Section title="Users">
                <UsersListing
                  users={context.state.users}
                  setUsers={context.setUsers}
                  removeUser={context.removeUser}
                />
              </Section>
              <Section title="Registration">
                <Topics />
                <div>
                  <RegistrationForm addUser={context.addUser} />
                </div>
              </Section>
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Home;
