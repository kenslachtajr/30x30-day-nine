import {NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { LoginComponent } from '@phones/ui-libraries';
import { WildcardComponent } from '@phones/ui-libraries';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'phones/:id', component: PhonesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
