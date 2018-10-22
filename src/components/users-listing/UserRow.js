import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { compose, lifecycle, withState } from "recompose";
import { getUserPosts, getUserAlbums, getUserPhotos } from "../../api";
import { getDaysOfWeek } from "../../utils";
import { Link } from "react-router-dom";

const enhance = compose(
  withState("posts", null, 0),
  withState("albums", null, 0),
  withState("photos", null, 0),
  withState("loading", null, false),
  lifecycle({
    componentDidMount() {
      const { id, isNew } = this.props.user;

      if (!isNew) {
        this.setState({ loading: true });

        Promise.all([getUserPosts(id), getUserAlbums(id), getUserPhotos(id)])
          .then(data => {
            const posts = data[0].data.length;
            const albums = data[1].data.length;
            const photos = data[2].data.length;

            this.setState({ posts, albums, photos, loading: false });
          })
          .catch(error => {
            console.log("Something went wrong :(", error);
          });
      }
    }
  })
);

const UserRow = enhance(
  ({ user, onRemove, posts, albums, photos, loading }) => {
    const rideInGroup = user.rideInGroup ? user.rideInGroup : "Never";
    const daysOfWeek = user.daysOfWeek ? user.daysOfWeek : ["0", "1", "2"];
    return (
      <tr>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
        <td>
          {!user.isNew && user.address.geo ? (
            <a
              href={`https://www.google.com/maps/@${user.address.geo.lat},${
                user.address.geo.lng
              },10z`}
              target="_blank"
            >
              {user.address.city}
            </a>
          ) : (
            <span>{user.address.city}</span>
          )}
        </td>
        <td>{rideInGroup}</td>
        <td>{getDaysOfWeek(daysOfWeek)}</td>
        <td>
          <Link to={`/user/${user.id}/posts`}>
            {loading ? (
              <FontAwesomeIcon icon="spinner" className="icon-loading" />
            ) : (
              posts
            )}
          </Link>
        </td>
        <td>
          <Link to={`/user/${user.id}/albums`}>
            {loading ? (
              <FontAwesomeIcon icon="spinner" className="icon-loading" />
            ) : (
              albums
            )}
          </Link>
        </td>
        <td>{loading ? <FontAwesomeIcon icon="spinner" /> : photos}</td>
        <td>
          <FontAwesomeIcon
            icon="trash-alt"
            className="icon-remove"
            onClick={() => onRemove(user)}
          />
        </td>
      </tr>
    );
  }
);

export default UserRow;
