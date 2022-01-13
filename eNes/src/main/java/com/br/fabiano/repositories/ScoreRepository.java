package com.br.fabiano.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.fabiano.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {

}
