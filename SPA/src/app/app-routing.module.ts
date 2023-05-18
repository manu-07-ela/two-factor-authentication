import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'TermsAndConditions', component: TermsAndConditionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
