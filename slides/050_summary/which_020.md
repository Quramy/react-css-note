
<div style="display:flex">
<div style="flex:1; font-size:0.75em;">
<h3>CSS in JS</h4>

<ul class="good">
  <li>単一のJSファイルにテンプレート(JSX)とStyle定義を記述できる</li>
</ul>

<ul class="bad">
  <li>h:overやメディアクエリにはライブラリ毎に記法が異なる</li>
  <li>inline-styleの利用は仮想DOMのパフォーマンスに悪影響があるかも(by <a href="https://github.com/petehunt/jsxstyle#the-problem-with-vjeuxs-solution" target="_blank"> @petehunt </a>)
</li>
</ul>

</div>

<div style="width:30px"></div>

<div style="flex:1; font-size:0.75em;">
<h3>CSS Modules</h4>

<ul class="good">
  <li>CSS記法がそのまま利用できる</li>
  <li>JavaScript以外の言語からも利用しやすい</li>
</ul>
<ul class="bad">
  <li>Module bundler pluginが必須. ビルドスクリプトが面倒</li>
</ul>

</div>
</div>
