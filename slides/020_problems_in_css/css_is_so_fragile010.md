### CSS is so fragile

Style定義はとても壊れやすい

* 外部からComponentのCSSを破壊する例:

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
