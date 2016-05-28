# React CSS Note

ReactとCSS in JS, CSS Modulesの発表資料関連を格納しています。

[http://quramy.github.io/react-css-note/](http://quramy.github.io/react-css-note/)

## Demo

それぞれのディレクトリで `npm i && npm start` を実行してください。

3.2のRadium Demoを除いて 全てCard Componentの例となっています。Radium Demoはkeyframes animation の例となります。

* `demo/0.0_global/` : スコープを考慮せずにCSSを利用するパターンです(アンチパターン)
* `demo/1.0_bem/` : CSSの命名規約にBEMを導入したパターンです
* `demo/3.0_css-in-js/` : styleにJS Objectを利用するパターンです。特にツールは利用していません。
* `demo/3.1_css-in-js_with_typescript/` : 3.0と同様の例ですが、BabelではなくTypeScriptを使っています。
* `demo/3.2_css-in-js_radium/` : Radiumを導入した例です。
* `demo/4.0_css-modules_basic/` : CSS Modulesの利用例です。Module Bundlerにはbrowserifyを利用しています。
* `demo/4.1_css-modules_with_webpack/` : 4.0と同様ですが、Module BundlerはWebpackを選択しています。
* `demo/4.2_css-modules_with_ts/` : 4.1に加えて、TypeScriptを利用しています。css.d.tsの生成が含まれます。
