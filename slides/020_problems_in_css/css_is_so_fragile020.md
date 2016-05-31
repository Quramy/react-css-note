* ComponentのCSSが子要素を破壊する例:

```css
/* Card Componentの内部利用のために定義された CSS Class */
.card .title { font-size: 18pt; }
```

```js
// Card Componentの利用コード
import { Card } from "./Card";
function renderCard() {
  return (
    <Card>
      <sectoin className="sub">
        {/* 利用者側はCardがtitleというclass名を使っていることを知らない */}
        <div className="title">sub title</div>
      </sectoin>
    </Card>
  );
}
```

```html
<!-- 出力されるDOM -->
<div class="card">
  <header class="title"></header>
  <div>
    <sectoin class="sub">
      <!-- Cardが内部的に使っている .card .title のルールが適用されてしまう -->
      <header class="title">sub title</header>
    </sectoin>
  </div>
</div>
```
