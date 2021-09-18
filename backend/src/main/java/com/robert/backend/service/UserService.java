package com.robert.backend.service;


import com.robert.backend.model.UserEntity;
import com.robert.backend.repo.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity create(UserEntity userEntity) {

        //Das save() macht nicht sofort einen Commit an die Datenbank.
        // Deswegen lieber save and flush() nutzen.
        return userRepository.save(userEntity);
    }

    //Find all ist ein full table scan = schlecht->Zeit aufwendig
    private Optional<UserEntity> find(String name) {

        return userRepository.findByUserName(name);
    }
}
