CSS in JSではStyleとなるオブジェクトを直接JSで記述する.

```js
/* CardStyles.js */
export const root = {
  backgroundColor: "#fff",
  padding: "20px",
  border: "1px solid #f0f2fb",
  borderRadius: "3px",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)",
  marginBottom: "30px",
};

// 以下略
```

```js
/* Card.jsx */
import React from "react";
import * as st from "./CardStyles";

export class Card extends React.Component {
  render() {
    const {title, primary, children} = this.props;
    return (
      { /* inline style に展開される */ }
      <div style={primary ? st.primaryRoot : st.root}>
        <header style={primary ? st.primaryTitle : st.title}>{title}</header>
        <div>{children}</div>
      </div>
    );
  }
}
```
