import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>

          <ul className="recent-posts-posts">
            <li> post 0 </li>
            <li> post 1 </li>
            <li> post 2 </li>
          </ul>

          <div className="recent-post-title"></div>
        </div>
      </div>
    );
  }
}
