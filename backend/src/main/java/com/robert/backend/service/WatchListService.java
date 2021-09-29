package com.robert.backend.service;

import com.robert.backend.model.NYTBestListEntity;
import com.robert.backend.model.WatchlistEntity;
import com.robert.backend.repo.WatchListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchListService {
    private final WatchListRepository watchListRepository;

    @Autowired
    public WatchListService(WatchListRepository watchListRepository) {
        this.watchListRepository = watchListRepository;
    }

    public void fillTable(NYTBestListEntity nytBestListEntity) {

        WatchlistEntity toPersistWatchList = new WatchlistEntity();

        toPersistWatchList.setAuthor(nytBestListEntity.getAuthor());
        toPersistWatchList.setBook(nytBestListEntity.getBook());

        watchListRepository.save(toPersistWatchList);
    }


    public List<WatchlistEntity> readTable() {
        return watchListRepository.findAll();
    }

    public void removeEntry(Long id) {
    watchListRepository.deleteById(id);
    }
}
