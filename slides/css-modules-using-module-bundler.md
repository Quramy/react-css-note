### You need module bundler

CSS ModulesではModule bundlerのプラグインが必須.

* .cssファイルのClass名を書き換えてglobalな名前が分からないようにする
* 同時に.jsで利用するkeyと実クラス名の紐付け情報を作成してModule bundlerに引き渡す

```js
/* CSS Modules pluginが生成するmoduleイメージ */
module.exports = {
  "root": "_root_gub7p_1",
  :
};
```
