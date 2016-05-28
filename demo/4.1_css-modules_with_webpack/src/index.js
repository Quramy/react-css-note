import React from 'react';
import ReactDom from 'react-dom';
import {Card} from './card';

const title = "React and CSS";

ReactDom.render((
  <div>
    <card title={title}>hello, card component!</card>
    <card title={title} primary={true}>hello, primary card component!</card>
  </div>
), document.getElementById('app'));
