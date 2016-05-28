## CSS is so fragile

スタイル定義は容易に破壊され得る

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
