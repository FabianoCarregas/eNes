package com.br.fabiano.controllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fabiano.dto.GameDTO;
import com.br.fabiano.dto.ScoreDTO;

@RestController
@RequestMapping(value = "/users")
public class UserController {
			
	@PutMapping
	public GameDTO findById(ScoreDTO score) {
		return null;
	}

}
