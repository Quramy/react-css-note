### Local scoped by default

CSS Modulesでは定義されたClassがES 2015 Modulesのように振る舞う

```css
/* MyClass.css */
.MyClass { color: red; }
```

```js
/* MyClass.js */
export class MyClass {...}
```

<ul class="good">
  <li> `MyClass`を利用する際は明示的に`import`する </li>
  <li>他のファイルに同名の`MyClass` が定義されていても干渉しない</li>
</ul>