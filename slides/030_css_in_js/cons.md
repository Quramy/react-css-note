### Cons of inline-style

inline styleに展開する場合、下記が利用できない

<ul class="bad">
  <li>擬似要素セレクタ(e.g. `::before`)</li>
  <li>擬似クラスセレクタ(e.g. `:hover`)</li>
  <li>メディアクエリ</li>
  <li>@keyframes</li>
</ul>

