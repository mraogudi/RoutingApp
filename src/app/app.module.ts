import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewBookComponent } from './view-book/view-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbookComponent,
    ViewBookComponent,
    ManageBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
