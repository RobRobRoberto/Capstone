package com.robert.backend.controller;

import com.robert.backend.model.NYTBestListEntity;
import com.robert.backend.model.WatchlistEntity;
import com.robert.backend.service.WatchListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin
@RequestMapping("/watchlist")
public class WatchlistController {

    private final WatchListService watchListService;

    @Autowired
    public WatchlistController(WatchListService watchListService) {
        this.watchListService = watchListService;
    }

    @PostMapping
    public void createEntry(@RequestBody NYTBestListEntity nytBestListEntity){
        watchListService.fillTable(nytBestListEntity);
    }

    @GetMapping
    public ResponseEntity<List<WatchlistEntity>> listTableEntries(){
        return ok(watchListService.readTable());
    }

    @DeleteMapping("/{id}")
    public void removeEntry(@PathVariable Long id){
        watchListService.removeEntry(id);
    }

}
