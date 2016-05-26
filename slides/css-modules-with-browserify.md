## With Browserify

<a href="https://github.com/css-modules/css-modulesify" target="_blank">css-modules/css-modulesify</a> が利用可能

```sh
npm i browserify babelify css-modulesify

browserify -t [ babelify ] \
  -p [ css-modulesify -d dist/bundle.css ] \
  -d dist/bundle.js
```

<p class="smaller">
`NODE_ENV` を production として実行するとCSS Class名にfile hashが, <br>
そうでなければ CSS Class名にローカルファイル名が付与される
</p>
