import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { HomeComponent } from './home.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'feature-one',
      component: FeatureOneComponent,
    },
    {
      path: 'feature-two',
      component: FeatureTwoComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: '',
      redirectTo: 'feature-one',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
