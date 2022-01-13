package com.br.fabiano.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fabiano.dto.GameDTO;
import com.br.fabiano.dto.ScoreDTO;
import com.br.fabiano.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	ScoreService scoreService;
	
	@PutMapping
	public GameDTO saveScore(@RequestBody ScoreDTO dto) {
		GameDTO gameDto = scoreService.saveScore(dto);
		return gameDto;
	}

}
