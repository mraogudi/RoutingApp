import { UpdateBookComponent } from './update-book/update-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'add-book', component: AddbookComponent},
  {path: 'view/:id', component: ViewBookComponent},
  {path: 'manage', component: ManageBookComponent},
  {path: 'update/:id', component: UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
