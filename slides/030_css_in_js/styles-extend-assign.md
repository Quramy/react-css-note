
JavaScriptの関数を使えば、Styleの合成も容易

```js
export const root = {
  backgroundColor: "#fff",
  padding: "20px",
  border: "1px solid #f0f2fb",
  borderRadius: "3px",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)",
  marginBottom: "30px",
};

export const primaryRoot = Object.assign({}, root, {
  backgroundColor: "#62c4a4",
  border: "none",
  color: "white",
});
```
