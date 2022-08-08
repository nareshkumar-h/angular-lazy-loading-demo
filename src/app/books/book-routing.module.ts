import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'new', component: CreateBookComponent},
  {path:'', component:ListBooksComponent},
  {path:':id', component:ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
