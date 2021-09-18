package com.robert.backend.api;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CredentialDto {
    private String username;
    private String password;
}
