package com.br.fabiano.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.fabiano.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
