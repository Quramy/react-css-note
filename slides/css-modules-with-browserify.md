### With Browserify

<a href="https://github.com/css-modules/css-modulesify" target="_blank">css-modules/css-modulesify</a> pluginが利用可能

```sh
npm i browserify babelify css-modulesify

browserify \
  -t [ babelify ] \
  -p [ css-modulesify -d dist/bundle.css ] \
  -d dist/bundle.js
```

<p class="smaller">
  `NODE_ENV` の値によって, 生成されるCSS Class名が異なる:
</p>
<ul>
  <li>
    <p class="smaller">デフォルト: prefixにlocal file pathが付与される</p>
  </li>
  <li>
    <p class="smaller">production: suffixにfile hash付与される<br></p>
  </li>
</ul>

