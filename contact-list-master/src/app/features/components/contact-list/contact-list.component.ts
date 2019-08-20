import { Component, OnInit } from '@angular/core';
import { Contact } from '../../..//core/models/contact';
import { ContactListService } from 'src/app/core/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactsListService: ContactListService) {
  }

  ngOnInit(): void {
      this.fetchContacts();
  }

  contactsListChanged() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactsListService.getContacts().subscribe (
      contacts => { this.contacts = contacts; },
      error => { console.log('Error retrieving API data: ', error.message); }
    );
  }

}
