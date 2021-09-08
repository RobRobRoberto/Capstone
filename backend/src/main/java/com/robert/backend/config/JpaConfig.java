package com.robert.backend.config;


import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EntityScan(basePackages = {"com.robert.backend.model"})
@EnableJpaRepositories(basePackages = {"com.robert.backend.repo"})
@EnableTransactionManagement
public class JpaConfig {
}
