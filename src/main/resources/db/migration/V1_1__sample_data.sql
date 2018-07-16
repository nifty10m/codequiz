insert into category (id, name, created_at) values
  ('0774660a-9966-4955-836e-a5226d93ab87', 'Demo', '2018-07-16 08:37:05.157000');

insert into question (id, category_id, question) values
  ('a5982b49-168e-405b-bd93-dd981588f7ca', '0774660a-9966-4955-836e-a5226d93ab87', 'Whats the name of the company behind codequiz?'),
  ('66aabb97-6ba1-440b-bb8a-b0f8c2355f8d', '0774660a-9966-4955-836e-a5226d93ab87', 'How many letters does the word codequiz have?'),
  ('3679034c-4750-4f52-80bb-c72d3d678da5', '0774660a-9966-4955-836e-a5226d93ab87', 'What is the meaning of life?'),
  ('4ee26fea-61b7-4f71-a677-4be12a4b89ca', '0774660a-9966-4955-836e-a5226d93ab87', 'Have you tried turning it off and on again?'),
  ('34687c54-f444-4b29-b7e6-bac44921f8d6', '0774660a-9966-4955-836e-a5226d93ab87', 'Did you like this quiz?');

insert into answer (id, question_id, answer, correct_answer) values
  ('0f59f35e-331f-40a7-abf6-3bff31b71878', 'a5982b49-168e-405b-bd93-dd981588f7ca', '10M', true),
  ('95841657-452e-42f4-bd29-c3fec3b5106c', 'a5982b49-168e-405b-bd93-dd981588f7ca', 'Twitter', false),
  ('20e8808f-dbc2-43f5-a457-097285c1e56b', 'a5982b49-168e-405b-bd93-dd981588f7ca', 'Google', false),
  ('4af65792-cc0b-4e80-8597-426e64284b1f', 'a5982b49-168e-405b-bd93-dd981588f7ca', 'Facebook', false);
insert into answer (id, question_id, answer, correct_answer) values
  ('aff4bec3-9fcc-4ffa-89de-d159103d1652', '66aabb97-6ba1-440b-bb8a-b0f8c2355f8d', '4', true),
  ('6deea113-c544-4145-ae1d-3c1a4561ec11', '66aabb97-6ba1-440b-bb8a-b0f8c2355f8d', '3', false),
  ('b0006983-4eaf-4881-aaf3-f02c1a2cc55a', '66aabb97-6ba1-440b-bb8a-b0f8c2355f8d', '2', false),
  ('6891ef98-45da-46c3-b7e0-f6ef4c743e14', '66aabb97-6ba1-440b-bb8a-b0f8c2355f8d', '1', false);
insert into answer (id, question_id, answer, correct_answer) values
  ('0b7fb7c1-f5f5-430a-9d83-073cf8d876dd', '3679034c-4750-4f52-80bb-c72d3d678da5', '42', true),
  ('9d2ea1a8-4240-4f9a-a07e-9d8bd2281fb2', '3679034c-4750-4f52-80bb-c72d3d678da5', 'Beer', false),
  ('46531622-8eb3-48ab-adb7-289d0f026b66', '3679034c-4750-4f52-80bb-c72d3d678da5', 'Love', false),
  ('712e734b-3bbb-4ce9-905f-a7078ce0e606', '3679034c-4750-4f52-80bb-c72d3d678da5', 'Work', false);
insert into answer (id, question_id, answer, correct_answer) values
  ('c864f8dc-5a4e-47db-8440-90e5c4016e3f', '4ee26fea-61b7-4f71-a677-4be12a4b89ca', 'yes', true),
  ('94c50b39-3a56-4e7e-9d22-19f4d4101a74', '4ee26fea-61b7-4f71-a677-4be12a4b89ca', 'no', false),
  ('f7b65c5f-07b6-475f-9066-15619a9791de', '4ee26fea-61b7-4f71-a677-4be12a4b89ca', 'maybe?!', false),
  ('f4c09ab8-ab47-43f3-897e-59315d1b7f69', '4ee26fea-61b7-4f71-a677-4be12a4b89ca', 'how do I do that?', false);
insert into answer (id, question_id, answer, correct_answer) values
  ('10ef8153-85a9-4f1b-8eea-c40825c1fe7c', '34687c54-f444-4b29-b7e6-bac44921f8d6', 'absolutely!', true),
  ('e2b6b74e-cf1a-44e7-acb7-50b109394398', '34687c54-f444-4b29-b7e6-bac44921f8d6', 'yes', false),
  ('9842aefa-d431-4d76-a2a7-58206fdbb191', '34687c54-f444-4b29-b7e6-bac44921f8d6', 'it was great', false),
  ('6820e04f-06f7-4a1a-99a3-c8cc360d4991', '34687c54-f444-4b29-b7e6-bac44921f8d6', 'of course', false);
