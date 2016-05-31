### Local scoped by default

CSS Modulesでは定義されたClassがES 2015 Modulesのように振る舞う

```css
/* Card.css */
.title { font-size: 18pt; }
```

```js
/* Card.css.js */
export const title = "title";
```

<ul class="good">
  <li> `title`を利用する際は明示的に`import`する </li>
  <li>他のファイルに同名の`title` が定義されていても干渉しない</li>
</ul>
