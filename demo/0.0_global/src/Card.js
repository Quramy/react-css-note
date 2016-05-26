import React from "react";
import cx from "classnames";

export class Card extends React.Component {
  render() {
    const {title, primary, children} = this.props;
    return (
      <div className={cx('card', {primary: primary})} >
         <header className="title">{title}</header>
         <div className="body">{children}</div>
      </div>
    );
  }
}
