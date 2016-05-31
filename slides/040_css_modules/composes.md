### Class composition

`composes` キーワードでCSS Class同士の合成が可能

(Sassの@extend, CSS @apply rule相当)

```css
/* util.css */
.large {
  font-size: 18pt;
  margin-bottom: 10px;
}
```

```css
/* Card.css */
.title {
  composes: large from './util.css';
  font-weight: bold;
}
```

```js
/* generated module of Card.css */
module.exports = {
  "title": "title_xxx_yyy large_zzz_www"
}
```
