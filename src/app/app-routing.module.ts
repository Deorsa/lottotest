import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';

const routes: Routes = [
  {
    path: 'buy-tickets',
    component: BuyTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
