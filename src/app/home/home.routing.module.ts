import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ExtraOptions, Router} from '@angular/router';
import {HomeComponent} from "./home.component";


const routerOptions: ExtraOptions = {
  useHash: true,
  preloadingStrategy: PreloadAllModules,
  anchorScrolling: 'enabled'
};

const routes: Routes = [{
  path: 'artdly',
  component: HomeComponent,
  children: [{

  }]}];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

