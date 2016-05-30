### Style object with Radium

```js
const height = "50px";

// アニメーションの定義
const translationKeyframes = Radium.keyframes({
  "0%":   {transform: "translateX(0%)"},
  "50%":  {transform: "translateX(100%)"},
  "100%": {transform: "translateX(0%)"},
}, "pulse");
const animation = (delay) =>({
  animation: `x 2.5s ease ${delay} infinite`,
  animationName: translationKeyframes,
});
const styles = {
  root: {
    position: "relative",
    width: "100%", height,
    marginBottom: "15px",
    ":hover": { /* :hover時のstyle */
      opacity: 0.6,
    },
  },
  movable: {
    position: "absolute",
    width: "100%",
    top: 0, bottom: 0,
  },
  circle: {
    backgroundColor: "#62c4a4",
    width: height, height,
    borderRadius: "25px",
  }
};
```

<ul>
  <li>
    <p class="smaller">Radium.keyframesでアニメーションを定義</p>
  </li>
  <li>
    <p class="smaller">':hover'をkeyとしてstyle定義</p>
  </li>
</ul>
