package com.robert.backend.repo;

import com.robert.backend.model.NYTBestListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NYTBestListRepository extends JpaRepository<NYTBestListEntity,Long> {

    Optional<NYTBestListEntity> findByAuthor(String author);

}
