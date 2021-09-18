package com.robert.backend.config;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

//Damit wir unser Secret auslagern können.
@Data
@Configuration
@ConfigurationProperties(prefix = "security.jwt")
public class JwtConfig {
    String secret;
    int expiresAfterMinutes;
}
