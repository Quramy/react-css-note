import React from "react";
import * as st from "./CardStyles";

export class Card extends React.Component {
  render() {
    const {title, primary, children} = this.props;
    return (
      <div style={primary ? st.primaryRoot : st.root}>
        <header style={primary ? st.primaryTitle : st.title}>{title}</header>
        <div>{children}</div>
      </div>
    );
  }
}
