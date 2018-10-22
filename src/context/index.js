import React, { Component } from "react";
import { addUser, deleteUser } from "../api";
export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    user: {
      name: "Jason Bourne"
    },
    users: []
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setUsers: users => this.setState({ users }),
          addUser: user => {
            addUser(user)
              .then(response => {
                this.setState({
                  users: [...this.state.users, { ...user, isNew: true }]
                });
              })
              .catch(error => {
                console.log("Something went wrong :(", error);
              });
          },
          removeUser: user => {
            deleteUser(user.id)
              .then(() => {
                this.setState({
                  users: [...this.state.users].filter(u => u.id !== user.id)
                });
              })
              .catch(error => {
                console.log("Something went wrong :(", error);
              });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
