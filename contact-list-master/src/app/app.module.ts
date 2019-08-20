import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './features/components/contact-list/contact-list.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstUpperCaseLetterPipe } from './shared/first-upper-case-letter.pipe';
import { FormatPhoneNumberPipe } from './shared/format-phone-number.pipe';
import { ContactDetailsComponent } from './features/components/contact-details/contact-details.component';
import { CreateContactComponent } from './features/components/create-contact/create-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    FirstUpperCaseLetterPipe,
    FormatPhoneNumberPipe,
    ContactDetailsComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
