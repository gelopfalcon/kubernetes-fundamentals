import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactListService } from 'src/app/core/contact-list.service';
import { Contact } from 'src/app/core/models/contact';

@Component({
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactListService: ContactListService) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.fetchContact(contactId);
    }
  }

  fetchContact(contactId) {
    this.contactListService.getContact(contactId).subscribe (
      contact => { this.contact = contact; },
      error => { console.log('Error retrieving API data: ', error.message); }
    );
  }

  deleteContact(contactId): void {
    console.log('Delete contact with id: ', contactId);
    this.contactListService.deleteContact(contactId).subscribe (
      data => this.goContactList()
    );
  }

  goContactList() {
    this.router.navigate(['/contacts']);
  }

}
