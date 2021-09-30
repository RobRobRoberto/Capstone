package com.robert.backend.service;

import com.robert.backend.model.NYTBestListEntity;
import com.robert.backend.repo.NYTBestListRepository;
import com.robert.backend.rest.NYT_dto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NYTBestListService {

    private final NYTBestListRepository nytBestListRepository;


    @Autowired
    public NYTBestListService(NYTBestListRepository nytBestListRepository) {
        this.nytBestListRepository = nytBestListRepository;
    }

    public Optional<NYTBestListEntity> find(String author) {
        return nytBestListRepository.findByAuthor(author);
    }


    public void fillTable(NYT_dto nyt_dto) {


        //Hier mappen des Objekts zum persistieren
        for (int i = 0; i < nyt_dto.getResults().length; i++) {
            NYTBestListEntity toPersist = new NYTBestListEntity();

            toPersist.setRank(nyt_dto.getResults()[i].getRank());
            toPersist.setAuthor(nyt_dto.getResults()[i].getBook_details()[0].getAuthor());
            toPersist.setBook(nyt_dto.getResults()[i].getBook_details()[0].getTitle());
            toPersist.setIsbn_13(nyt_dto.getResults()[i].getIsbns()[0].getIsbn13());


            Optional<NYTBestListEntity> existingEntity = find(toPersist.getAuthor());
            if (existingEntity.isEmpty()) {
                nytBestListRepository.save(toPersist);
            }

        }


    }

    public List<NYTBestListEntity> readTable(){
        return nytBestListRepository.findAll();
    }
}

