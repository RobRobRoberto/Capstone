package com.robert.backend.config;

import com.robert.backend.filter.JwtAuthFilter;
import com.robert.backend.service.UserEntityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //Whitelist für unten zu verwenden.
    private final String[] SWAGGER_URLS = {"/v2/api-docs/**","/swagger-ui/**", "/swagger-resources/**"};

    private final UserEntityDetailsService detailsService;
    private final JwtAuthFilter jwtAuthFilter;

    @Autowired
    public SecurityConfig(UserEntityDetailsService detailsService, JwtAuthFilter jwtAuthFilter) {
        this.detailsService = detailsService;
        this.jwtAuthFilter = jwtAuthFilter;
    }

    public SecurityConfig(boolean disableDefaults, UserEntityDetailsService detailsService, JwtAuthFilter jwtAuthFilter) {
        super(disableDefaults);
        this.detailsService = detailsService;
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Autowired


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(detailsService);

    }

    @Bean
    //Es handelt sich um mathematische Einwegfunktionen.
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }



    @Override
    //csrf ausschalten => Cross-Site-Request-Forgery ausschalten. Muss man nicht verstehen.
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers(HttpMethod.GET,SWAGGER_URLS).permitAll()
                .antMatchers(HttpMethod.POST,"/auth/**").permitAll()
                .antMatchers(HttpMethod.POST,"user").permitAll()
                .antMatchers("/**").authenticated()
                .and()
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    //Webconfig überschreiben, damit wir mit Swagger Requests senden können.
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(HttpMethod.GET,SWAGGER_URLS);
    }
}
