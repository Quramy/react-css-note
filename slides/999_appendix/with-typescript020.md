TypeScriptでもCSS Modulesが使いたい

```js
import * as React from "react";
import * as st from "./Card.css"; // compile errorに...

export interface CardProps { title: string; primary?: boolean; children?: any}

export function Card(props: CardProps) {
  const {title, primary, children} = props;
  return (
    <div className={primary ? st.primaryRoot : st.root} >
       <header className={primary? st.primaryTitle : st.title}>{title}</header>
       <div>{children}</div>
    </div>
  );
}
```
