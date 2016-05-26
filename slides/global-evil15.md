props.childrenが破壊されるケース:

```css
.card .title { font-size: 20px; }
```

```js
import { Card } from "./Card";
function renderCard() {
  return (
    <Card>
      {/* 利用者側はCardがtitleというclass名を使っていることを知らない */}
      <sectoin className="sub">
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
      <!-- 意図せずに.card .title のスタイルが適用される -->
      <header class="title">sub title</header>
    </sectoin>
  </div>
</div>
```
