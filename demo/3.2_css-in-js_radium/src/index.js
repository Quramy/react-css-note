import React from "react";
import ReactDom from "react-dom";
import { AnimatedCircle } from "./AnimatedCircle";
import { StyleRoot } from "radium";

ReactDom.render(
  <StyleRoot>
    <AnimatedCircle delay="0s"></AnimatedCircle>
    <AnimatedCircle delay=".3s"></AnimatedCircle>
    <AnimatedCircle delay=".6s"></AnimatedCircle>
  </StyleRoot>
, document.getElementById("app"));
