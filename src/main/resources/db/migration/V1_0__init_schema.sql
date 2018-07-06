create table category
(
  id         uuid not null
    constraint category_pkey
    primary key,
  created_at timestamp,
  name       varchar(255)
);

create table question
(
  id          uuid not null
    constraint question_pkey
    primary key,
  question    varchar(255),
  category_id uuid
    constraint category_fk
    references category
);

create table answer
(
  id             uuid    not null
    constraint answer_pkey
    primary key,
  answer         varchar(255),
  correct_answer boolean not null,
  question_id    uuid
    constraint question_fk
    references question
);
