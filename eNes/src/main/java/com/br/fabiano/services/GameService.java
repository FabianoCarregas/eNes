package com.br.fabiano.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.br.fabiano.dto.GameDTO;
import com.br.fabiano.entities.Game;
import com.br.fabiano.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public Page<GameDTO> findAll(Pageable pageable){
		Page<Game> list = gameRepository.findAll(pageable);
		Page<GameDTO> page = list.map(x -> new GameDTO(x));
		return page;
		
	}
	@Transactional(readOnly = true)
	public GameDTO findById(@PathVariable Long id) {
		Game game = gameRepository.findById(id).get();
		GameDTO gameDto = new GameDTO(game);
		return gameDto;
	}
}
