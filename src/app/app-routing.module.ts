import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ExtraOptions} from '@angular/router';


const routerOptions: ExtraOptions = {
  useHash: true,
  preloadingStrategy: PreloadAllModules,
  anchorScrolling: 'enabled'
};

const routes: Routes = [{
  path: '',
  redirectTo: 'artdly',
  pathMatch: 'full'
}, {
  path: 'artdly',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

