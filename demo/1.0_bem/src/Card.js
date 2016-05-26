import React from "react";

export class Card extends React.Component {
  render() {
    const {title, primary, children} = this.props;
    return (
      <div className={primary ? 'card--primary' : 'card'} >
        <header className={primary ? 'card--primary__title' : 'card__title'}>{title}</header>
        <div className="body">{children}</div>
      </div>
    );
  }
}
