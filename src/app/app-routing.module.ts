import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingsComponent } from './components/rankings/rankings.component';

const routes: Routes = [
  { path: 'rankings', component: RankingsComponent },
  { path: '', redirectTo: '/rankings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
