import React from "react";
import { compose, lifecycle, withState } from "recompose";
import { getUsers } from "../../api";
import UserRow from "./UserRow";
import "./users-listing.css";

const enhance = compose(
  withState("loading", "setLoading", true),
  lifecycle({
    componentDidMount() {
      getUsers().then(({ data }) => {
        this.props.setUsers(data);
        this.setState({ loading: false });
      });
    }
  })
);

const UsersListing = enhance(
  ({ users, loading, removeUser, setUsers, test }) => (
    <div className="table-responsive">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="users-listing table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Posts</th>
              <th>Albums</th>
              <th>Photos</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow user={user} key={user.id} onRemove={removeUser} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
);

export default UsersListing;
