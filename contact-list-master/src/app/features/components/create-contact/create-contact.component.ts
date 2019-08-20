import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/core/models/contact';
import { Router } from '@angular/router';
import { ContactListService } from 'src/app/core/contact-list.service';
import { NumberValidators } from 'src/app/shared/number.validor';
import { SpecialCharacterValidators } from 'src/app/shared/special-character.validor';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contactForm: FormGroup;
  contact = new Contact();

  constructor(private router: Router,
              private contactListService: ContactListService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        name: ['',
               [Validators.required,
               Validators.minLength(5),
               Validators.maxLength(10),
               NumberValidators.number(),
               SpecialCharacterValidators.specialCharacter()]],
        lastName: ['',
                   [Validators.required,
                   Validators.minLength(3),
                   Validators.maxLength(10),
                   NumberValidators.number(),
                   SpecialCharacterValidators.specialCharacter()]],
        id: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: '',
      }
    );
  }

  save() {
    if (this.contactForm.valid) {
      if (this.contactForm.dirty) {
        const contact = { ...this.contact, ...this.contactForm.value };
        this.contactListService.createContact(contact)
            .subscribe(
              () => this.goContactList(),
              error => console.log('Error saving Contact: ', error.message)
            );
      }
    }
  }

  goContactList() {
    this.router.navigate(['/contacts']);
  }

}
