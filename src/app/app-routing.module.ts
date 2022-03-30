import { NgModule } from '@angular/core';
//import 路由功能
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//path: 用來匹配瀏覽器位址列中 URL 的字串。
//component: 導航到該路由時，路由器應該建立的元件。
const routes: Routes = [ {path: 'heroes', component: HeroesComponent} ];

//forRoot()，是因為你要在應用的最上層配置這個路由器。 forRoot() 方法會提供路由所需的服務提供者和指令，還會基於瀏覽器的當前 URL 執行首次導航。
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }