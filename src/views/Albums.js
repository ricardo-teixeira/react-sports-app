import React from "react";
import Header from "../components/header";
import { compose, lifecycle, withState } from "recompose";
import Section from "../components/section";
import Album from "../components/album";

import { getUserAlbumsWithPhotos } from "../api";

const enhance = compose(
  withState("albums", null, []),
  withState("loading", null, false),
  lifecycle({
    componentDidMount() {
      const { albumId } = this.props.match.params;

      this.setState({ loading: true });

      getUserAlbumsWithPhotos(albumId)
        .then(({ data }) => {
          this.setState({ albums: data, loading: false });
        })
        .catch(error => {
          console.log("Something went wrong :(", error);
        });
    }
  })
);

const Albums = enhance(({ albums, loading }) => (
  <React.Fragment>
    <Header />
    <div className="container">
      <Section title="Albums">
        {loading ? (
          <div>Loading...</div>
        ) : (
          albums.map(album => <Album key={album.id} {...album} />)
        )}
      </Section>
    </div>
  </React.Fragment>
));

export default Albums;
