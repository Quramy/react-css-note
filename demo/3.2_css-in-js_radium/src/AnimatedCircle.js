import React from "react";
import Radium from "radium";

const translationKeyframes = Radium.keyframes({
  "0%":   {transform: "translateX(0%)"},
  "50%":  {transform: "translateX(100%)"},
  "100%": {transform: "translateX(0%)"},
}, "pulse");

const height = "50px";
const animation = (delay) =>({
  animation: `x 2.5s ease ${delay} infinite`,
  animationName: translationKeyframes,
});
const styles = {
  root: {
    position: "relative",
    width: "100%", height,
    marginBottom: "15px",
    ":hover": {
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
