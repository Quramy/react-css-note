import * as React from "react";
import * as st from "./Card.css";

export interface CardProps { title: string; primary?: boolean}

export class Card extends React.Component<CardProps, {}> {
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
