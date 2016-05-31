### How to use CSS Modules

冒頭のCard ComponentをCSS Modulesで書き換えてみる

```css
/* src/Card.css */
.root {
  background-color: #fff;
  :
}

.title {
  font-size: 18pt;
  :
}
```

```js
/* src/Card.jsx */
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
