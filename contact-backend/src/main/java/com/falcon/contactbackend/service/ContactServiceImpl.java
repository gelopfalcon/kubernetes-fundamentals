package com.falcon.contactbackend.service;

import com.falcon.contactbackend.domain.Contact;
import com.falcon.contactbackend.dto.ContactDto;
import com.falcon.contactbackend.repository.ContactRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private ModelMapper modelMapper;

    private static final Type CONTACT_DTO_LIST_TYPE = new TypeToken<List<ContactDto>>() {
    }.getType();

    @Override
    public Optional<List<ContactDto>> getAllContacts() {
        List<ContactDto> contacts = modelMapper.map(contactRepository.findAll(), CONTACT_DTO_LIST_TYPE);

        return contacts.isEmpty() ? Optional.empty() : Optional.of(contacts);
    }

    @Override
    public Optional<ContactDto> getContactById(String id) {
        Optional contact = contactRepository.findById(id);
        return contact.isPresent() ? Optional.of(modelMapper.map(contact.get(), ContactDto.class)) : Optional.empty();
    }

    @Override
    public void createContact(ContactDto contact) {

        contactRepository.insert(modelMapper.map(contact, Contact.class));
    }

    @Override
    public void deleteContactById(String id) {
        contactRepository.deleteById(id);
    }
}

