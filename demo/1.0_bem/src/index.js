import React from 'react';
import ReactDom from 'react-dom';
import {Card} from './card';

const title = "React and CSS";

ReactDom.render((
  <div>
    <Card title={title}>Hello, Component!</Card>
    <Card title={title} primary={true}>Hello, Component!</Card>
  </div>
), document.getElementById('app'));
