import React from "react";
import Header from "../components/header";
import { compose, lifecycle, withState } from "recompose";
import Section from "../components/section";
import Post from "../components/post";

import { getUserPostsWithComments } from "../api";

const enhance = compose(
  withState("posts", null, []),
  withState("loading", null, false),
  lifecycle({
    componentDidMount() {
      const { userId } = this.props.match.params;

      this.setState({ loading: true });

      getUserPostsWithComments(userId)
        .then(({ data }) => {
          this.setState({ posts: data, loading: false });
        })
        .catch(error => {
          console.log("Something went wrong :(", error);
        });
    }
  })
);

const Posts = enhance(({ posts, loading }) => (
  <React.Fragment>
    <Header />
    <div className="container">
      <Section title="Posts">
        {loading ? (
          <div>Loading...</div>
        ) : (
          posts.map(post => <Post key={post.id} {...post} />)
        )}
      </Section>
    </div>
  </React.Fragment>
));

export default Posts;
