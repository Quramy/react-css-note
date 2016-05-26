import * as React from "react";
import * as st from "./CardStyles";

export interface CardProps {
  title: string;
  primary?: boolean;
}

export class Card extends React.Component<CardProps, {}> {
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
