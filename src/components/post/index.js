import React from "react";
import "./post.css";

const Post = ({ title, body, comments }) => (
  <div className="post">
    <h3 className="title">{title}</h3>
    <p className="body">{body}</p>
    <div className="comments">
      <h4>Comments</h4>
      {comments.map(c => (
        <div key={c.id}>
          <details>
            <summary>{c.name}</summary>
            <blockquote>
              <em>{c.body}</em>
            </blockquote>
            <a href={c.email}>{c.email}</a>
          </details>
        </div>
      ))}
    </div>
  </div>
);

export default Post;
