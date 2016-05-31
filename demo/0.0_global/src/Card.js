import React from "react";
import cx from "classnames";

export function Card({title, primary, children}) {
  return (
    <div className={cx('card', {primary: primary})} >
       <header className="title">{title}</header>
       <div className="body">{children}</div>
    </div>
  );
}
