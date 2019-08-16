package com.falcon.contactbackend.controller;


import com.falcon.contactbackend.dto.ContactDto;
import com.falcon.contactbackend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping(
            value = "/contacts",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getContacts() {
        Optional result = contactService.getAllContacts();
        return result.isPresent() ? new ResponseEntity<>(result.get(), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(
            value = "/contacts/{contactId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getContact(@PathVariable String contactId) {
        Optional result = contactService.getContactById(contactId);
        return result.isPresent() ? new ResponseEntity<>(result.get(), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/contacts",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> insertContact(@Valid @RequestBody ContactDto contactDto) {

        contactService.createContact(contactDto);

        return new ResponseEntity<>(contactDto,HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/contacts/{contactId}")
    public ResponseEntity<?> deleteContact(@PathVariable("contactId") String contactId) {
        contactService.deleteContactById(contactId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
