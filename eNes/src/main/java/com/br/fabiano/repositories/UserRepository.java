package com.br.fabiano.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.fabiano.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
