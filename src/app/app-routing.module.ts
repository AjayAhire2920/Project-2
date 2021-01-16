import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeBookComponent } from './trade-book/trade-book.component';


const routes: Routes = [
  { path: "", component: TradeBookComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
