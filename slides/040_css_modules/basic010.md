### How to use CSS Modules

冒頭のCard ComponentをCSS Modulesで書き換えてみる

```css
/* src/Card.css */
.root {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #f0f2fb;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
  margin-bottom: 30px;
}
:
```

```js
/* src/Card.js */
import React from "react";
import * as st from "./Card.css"; // .cssからimport

export class Card extends React.Component {
  render() {
    const {title, children} = this.props;
    return (
      <div className={st.root} > {/* class名がexportされている */}
         <header className={st.title}>{title}</header>
         <div>{children}</div>
      </div>
    );
  }
}
```
