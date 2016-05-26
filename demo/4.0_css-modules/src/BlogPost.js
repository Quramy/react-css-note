import React from "react";
import s from "./BlogPost.css";

export class BlogPost extends React.Component {
  render() {
    const {title, authorName, isHot} = this.props.post;
    return (
      <section className={s.root}>
        <div className={s.authorName}>{authorName}</div>
        <div className={isHot ? s.hotTitle : s.title}>{title}</div>
      </section>
    );
  }
}
