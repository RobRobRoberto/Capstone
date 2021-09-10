package com.robert.backend.controller;


import com.robert.backend.api.UserDto;
import com.robert.backend.model.UserEntity;
import com.robert.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;
//'@CrossOrigin' egal wer aufruft → erhält Daten.
@CrossOrigin
@RestController
@RequestMapping("/user")
@Tag(name = UserController.USER_CONTROLLER_TAG, description = "CRUD operations for a User")
@Api(
        tags = UserController.USER_CONTROLLER_TAG
)
public class UserController {

    public static final String USER_CONTROLLER_TAG = "User";
    private  UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    //ResponseEntity gibt uns mehr Kontrolle über den Rückgabewert.
    @PostMapping
    public ResponseEntity<UserDto> create(@RequestBody UserDto userDto) {

        //Aufmachen des ankommenden Pakets(HTTP Body) und füllen der hier erzeugten Instanz.
        UserEntity userToPersist = new UserEntity();

        userToPersist.setPassword(userDto.getPassword());
        userToPersist.setUserName(userDto.getUsername());

        //Persistieren der hier gefüllten Instanz.
        UserEntity persistedUser = userService.create(userToPersist);

        //Die HTTP Antwort vorbereiten, indem wir zurück ins DTO mappen.
        UserDto createdUser = map(persistedUser);

        //200er-Antwort sowie einen Body mit dem UserDto.
        return ok(createdUser);
    }

    private UserDto map(UserEntity userEntity) {
        return UserDto.builder()
                .username(userEntity.getUserName())
                .password(userEntity.getPassword())
                .build();
    }

}
