package com.robert.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;


//noargs and allargs construtor missing

@Entity
@Getter
@Setter
@Table(name="user_table")
public class UserEntity implements UserDetails {


    @Id
    @GeneratedValue
    //Tabelle darf nie leer sein-> nullable condition
    // Die ID sollte nicht heraus gegeben werden.
    @Column(name ="user_id", nullable = false)
    private Long userId;

    //Eingabe muss eineindeutig sein-> unique condition
    @Column(name ="user_name", nullable = false,unique = true)
    private String userName;

    @Column(name="user_password",nullable = false)
    private String password;

    //? => Ich möchte eine Collection haben,von iwas, das dieses GrantedAuthority erweitert.
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("user"));
    }

    @Override
    public String getUsername() {
        return userName;
    }



    //Doofe 4 Methoden: Sie sagen, mit dem ACc ist alles fine.
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
