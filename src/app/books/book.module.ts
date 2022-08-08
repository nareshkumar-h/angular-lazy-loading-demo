import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from '../books/create-book/create-book.component';
import { ListBooksComponent } from '../books/list-books/list-books.component';
import { ViewBookComponent } from '../books/view-book/view-book.component';


@NgModule({
  declarations: [
    ListBooksComponent,
    CreateBookComponent,
    ViewBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
