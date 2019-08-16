package com.falcon.contactbackend.service;

import com.falcon.contactbackend.dto.ContactDto;

import java.util.List;
import java.util.Optional;

public interface ContactService {

    Optional<List<ContactDto>> getAllContacts();

    Optional<ContactDto> getContactById(String id);

    void createContact(ContactDto contact);

    void deleteContactById(String id);
}
