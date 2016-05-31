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

export function Card({title, primary, children}) {
  return (
    <div className={primary ? st.primaryRoot : st.root} >
       <header className={primary? st.primaryTitle : st.title}>{title}</header>
       <div>{children}</div>
    </div>
  );
}
```
