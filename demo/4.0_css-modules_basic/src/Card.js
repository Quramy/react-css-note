import React from "react";
import * as st from "./Card.css";

export function Card({title, primary, children}) {
  return (
    <div className={primary ? st.primaryRoot : st.root} >
       <header className={primary? st.primaryTitle : st.title}>{title}</header>
       <div>{children}</div>
    </div>
  );
}
