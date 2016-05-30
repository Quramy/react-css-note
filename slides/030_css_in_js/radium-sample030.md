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

* Class Decorators(ES.next) を ComponentのClassに付与
