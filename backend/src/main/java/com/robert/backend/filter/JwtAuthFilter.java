package com.robert.backend.filter;


import com.robert.backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

//sind es Token, die den Nutzer autorisieren?
@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private JwtService jwtService;


    @Autowired
    public JwtAuthFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            String authHeader = request.getHeader("Authorization");
            if (authHeader != null) {

                String token = authHeader.replace("Bearer", "").trim();

                //Packt token aus und verifiziert ihn.
                String username = jwtService.decodeUsername(token);
                SecurityContextHolder.getContext().setAuthentication(
                        //Principal wird geschrieben.
                        new UsernamePasswordAuthenticationToken(
                                username,
                                "",
                                List.of(new SimpleGrantedAuthority("user")))
                );
            }


        } catch (Exception e) {
            //ignore
        }
        filterChain.doFilter(request, response);
        }








}

