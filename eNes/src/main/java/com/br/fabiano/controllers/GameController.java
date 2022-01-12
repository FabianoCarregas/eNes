package com.br.fabiano.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fabiano.dto.GameDTO;
import com.br.fabiano.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController{

	@Autowired
	GameService gameService;
	
	@GetMapping
	public Page<GameDTO> findAll(Pageable pageable) {
		return  gameService.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public GameDTO findById(@PathVariable Long id) {
		return gameService.findById(id);
	}
}
