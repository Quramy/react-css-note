### Component with Radium

```js
import React from "react";
import Radium from "radium";

@Radium
export class AnimatedCircle extends React.Component {
  render() {
    const { delay } = this.props;
    return (
      <div style={[styles.root, animation(delay)]}>
        <div style={styles.movable}>
          <div style={styles.circle}></div>
        </div>
      </div>
    );
  }
}
```

<ul>
  <li>
    <p class="smaller"><a href="https://github.com/wycats/javascript-decorators/blob/master/README.md" target="_blank">Class Decorators(ES.next)</a>を ComponentのClassに付与</p>
  </li>
  <li>
    <p class="smaller">styleに配列が使えるように拡張される</p>
  </li>
  <li>
    <p class="smaller">styleオブジェクトに":hover"が利用可能に</p>
  </li>
</ul>
