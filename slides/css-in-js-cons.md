## Cons

inline styleに展開するため、下記のセレクタは利用不可

<ul class="bad">
  <li>擬似要素セレクタ(e.g. `::before`)</li>
  <li>擬似クラスセレクタ(e.g. `:hover`)</li>
  <li>メディアクエリ</li>
</ul>
