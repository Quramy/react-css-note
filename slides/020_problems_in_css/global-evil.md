### CSS is so fragile

スタイル定義は外から簡単に破壊できてしまう

```css
.card {
  background-color: #fff;
  padding: 20px;
  /** 中略 **/
}
```

```css
/** これを追記すると... **/
div .card {
  background-color: red;
}
```
