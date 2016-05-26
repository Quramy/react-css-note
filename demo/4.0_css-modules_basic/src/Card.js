import React from "react";
import * as st from "./Card.css";

export class Card extends React.Component {
  render() {
    const {title, primary, children} = this.props;
    return (
      <div className={primary ? st.primaryRoot : st.root} >
         <header className={primary? st.primaryTitle : st.title}>{title}</header>
         <div>{children}</div>
      </div>
    );
  }
}
