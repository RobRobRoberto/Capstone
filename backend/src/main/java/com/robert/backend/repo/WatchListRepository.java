package com.robert.backend.repo;

import com.robert.backend.model.WatchlistEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WatchListRepository extends JpaRepository<WatchlistEntity, Long> {

}
