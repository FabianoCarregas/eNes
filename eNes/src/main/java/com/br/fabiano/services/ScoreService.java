package com.br.fabiano.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.fabiano.dto.GameDTO;
import com.br.fabiano.dto.ScoreDTO;
import com.br.fabiano.entities.Game;
import com.br.fabiano.entities.Score;
import com.br.fabiano.entities.User;
import com.br.fabiano.repositories.GameRepository;
import com.br.fabiano.repositories.ScoreRepository;
import com.br.fabiano.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private ScoreRepository scoreRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public GameDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user= userRepository.saveAndFlush(user);
		}
		
		Game game = gameRepository.findById(dto.getGameId()).get();
		
		Score score = new Score();
		score.setGame(game);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s : game.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / game.getScores().size();
		
		game.setScore(avg);
		game.setCount(game.getScores().size());
		
		game = gameRepository.save(game);
		
		return new GameDTO(game);
	}
	
}
