package com.robert.backend.config;

import com.robert.backend.service.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //Whitelist
    private final String[] SWAGGER_URLS = {"/v2/api-docs/**","/swagger-ui/**", "/swagger-resources/**"};

    private final UserEntityDetailsService detailsService;

    @Autowired
    public SecurityConfig(UserEntityDetailsService detailsService) {
        this.detailsService = detailsService;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(detailsService);

    }

    @Bean
    //deprecated=veraltet
    //Es handelt sich um mathematische Einwegfunktionen.
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

    @Override
    //csrf ausschalten => Cross-Site-Request-Forgery ausschalten. Muss man nicht verstehen.
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers(HttpMethod.GET,SWAGGER_URLS).permitAll()
                .antMatchers("/**")
                .authenticated()
                .and().formLogin()
                .and().httpBasic();//Anmeldung soll basic Auth sein
    }

    //Webconfig überschreiben, damit wir mit Swagger Requests senden können.
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(HttpMethod.GET,SWAGGER_URLS);
    }
}
