### Sharing variables

@value で値を定義すると.js, .cssからimport出来る

```css
/* shared.css */

@value duration 0.6s;
```

```css
/* animatedBall.css */

/* aliasを付けてimport可能 */
@value duration as bounceDuration from "./animation-values.css";

@keyframes bounce {
  33% { transform: translateY(-20px); }
  66% { transform: translateY(0px); }
}

.bounce {
  animation: bounce bounceDuration infinite ease-in-out;
}
```
