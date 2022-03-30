# angular-ivy-herodsssa

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-u29va6)

新增一個儀表盤檢視。

新增在英雄列表和儀表盤檢視之間導航的能力。

無論在哪個檢視中點選一個英雄，都會導航到該英雄的詳情頁。

在郵件中點選一個深連結，會直接開啟一個特定英雄的詳情檢視。

----------------------------------------------------------

添加了 Angular 路由器在各個不同元件之間導航。

你使用一些 <a> 連結和一個 <router-outlet> 把 AppComponent 轉換成了一個導航用的殼元件。

你在 AppRoutingModule 中配置了路由器。

你定義了一些簡單路由、一個重新導向路由和一個引數化路由。

你在 <a> 元素中使用了 routerLink 指令。

你把一個緊耦合的主從檢視重構成了帶路由的詳情檢視。

你使用路由連結引數來導航到所選英雄的詳情檢視。

在多個元件之間共享了 HeroService 服務。