import React from 'react';
import ReactDom from 'react-dom';
import {BlogPost} from './BlogPost';

const post = {
  authorName: "quramy",
  title: "React and CSS",
  isHot: true,
};

ReactDom.render(<BlogPost post={post} />, document.getElementById('app'));
