INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');

INSERT INTO tb_game(score, count, title, image) VALUES (4.5, 2, 'Super Bomberman', 'https://galaxianerd.com/wp-content/uploads/2018/02/super-bomberman-ps3-destravado-envio-via-email-D_NQ_NP_828190-MLB26633900091_012018-F.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (3.3, 3, 'Donkey Kong Country', 'https://upload.wikimedia.org/wikipedia/pt/8/83/Donkey_Kong_Country_capa.png');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'The Legend of Zelda: A Link to the Past', 'https://upload.wikimedia.org/wikipedia/pt/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Super Mario Kart', 'https://upload.wikimedia.org/wikipedia/pt/f/fc/Super_Mario_Kart_front.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Super Metroid', 'https://pt.wikipedia.org/wiki/Super_Metroid#/media/Ficheiro:Super_Metroid_capa.png');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Super Mario World', 'https://pt.wikipedia.org/wiki/Super_Mario_World#/media/Ficheiro:Super-Mario-World.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Street Fighter II', 'https://pt.wikipedia.org/wiki/Street_Fighter_II#/media/Ficheiro:Flyer_japan_sf2.jpg');


INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 3, 4.0);
