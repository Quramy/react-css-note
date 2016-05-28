import React from 'react';
import ReactDom from 'react-dom';
import {Card} from './card';

const title = "React and CSS";

ReactDom.render((
  <div>
    <Card title={title}>Hello, card component!</Card>
    <Card title={title} primary={true}>Hello, primary card component!</Card>
  </div>
), document.getElementById('app'));
