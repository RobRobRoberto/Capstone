package com.robert.backend.repo;

import com.robert.backend.model.NYTBestListEntity;
import com.robert.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NYTBestListRepository extends JpaRepository<NYTBestListEntity,Long> {

}
