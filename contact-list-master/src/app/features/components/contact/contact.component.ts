import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from '../../..//core/models/contact';
import { ContactListService } from 'src/app/core/contact-list.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactsListChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private contactListService: ContactListService) { }

  ngOnInit() {
  }

  deleteContact(contactId): void {
    console.log('Delete contact with id: ', contactId);
    this.contactListService.deleteContact(contactId).subscribe (
      data => { this.contactsListChanged.emit(true); }
    );
  }

}
