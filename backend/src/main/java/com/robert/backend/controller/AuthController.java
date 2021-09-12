package com.robert.backend.controller;


import com.robert.backend.api.AccesTokenDto;
import com.robert.backend.api.CredentialDto;
import com.robert.backend.api.UserDto;
import com.robert.backend.service.JwtService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;

import static org.springframework.http.ResponseEntity.ok;


@RestController
@RequestMapping("auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;


    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }


    @GetMapping("me")
    public ResponseEntity<UserDto> getLoggedInUser(Principal principal) {
        //Eine weitere Prüfung in der DB ist nicht notwendig->
        // Vertrauen auf Spring Security. Sobald er als Principal hinterlegt ist, muss er sich autorisiert haben.
        String username = principal.getName();


        return ok(
                UserDto.builder().username(username).build()
        );
    }


    @PostMapping("login")
    public ResponseEntity<AccesTokenDto> login(@RequestBody CredentialDto credentialDto) {


        //1. The username and password are obtained and combined into an instance of UsernamePasswordAuthenticationToken.
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                credentialDto.getUsername(),
                credentialDto.getPassword()
        );



        try {
            //2. The token is passed to an instance of AuthenticationManager for validation
            // 3.The AuthenticationManager returns a fully populated Authentication instance on successful authentication.
            authenticationManager.authenticate(authToken);


            String token = jwtService.createJwtToken(credentialDto.getUsername());

            return ok(new AccesTokenDto(token));
        } catch (AuthenticationException blup) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }
}
