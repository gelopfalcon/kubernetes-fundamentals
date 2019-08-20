import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './features/components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './features/components/contact-details/contact-details.component';
import { CreateContactComponent } from './features/components/create-contact/create-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'createContact', component: CreateContactComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
