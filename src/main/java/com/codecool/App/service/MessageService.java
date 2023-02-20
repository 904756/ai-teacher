package com.codecool.App.service;

import com.codecool.App.models.Message;
import com.codecool.App.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message save(Message message) {
        return messageRepository.save(message);
    }
    public List<Message> getAllMessagesForUser(String username) {
        return messageRepository.findByStudent(username);
    }
}