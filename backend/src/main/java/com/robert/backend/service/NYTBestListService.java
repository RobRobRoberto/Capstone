package com.robert.backend.service;

import com.robert.backend.model.NYTBestListEntity;
import com.robert.backend.repo.NYTBestListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NYTBestListService {

    private final NYTBestListRepository nytBestListRepository;

    @Autowired
    public NYTBestListService(NYTBestListRepository nytBestListRepository) {
        this.nytBestListRepository = nytBestListRepository;
    }


    public void fillTable(NYTBestListEntity listToPersist) {

        NYTBestListEntity liste = new NYTBestListEntity();
        liste.setBook(listToPersist.getBook());
        liste.setAuthor(listToPersist.getAuthor());


        nytBestListRepository.save(liste);
    }
}
