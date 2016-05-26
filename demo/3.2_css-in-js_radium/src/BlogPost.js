import React from "react";
import Radium from "radium";
import {BlogPostStyles as s} from "./BlogPostStyles";

@Radium
export class BlogPost extends React.Component {
  render() {
    const {title, authorName, isHot} = this.props.post;
    return (
      <section style={s.root}>
        <div style={s.authorName}>{authorName}</div>
        <div style={[s.title, isHot && s.hotTitle]}>{title}</div>
      </section>
    );
  }
}
