create database desafio_final_individual_dds_t12_gabriel_abal;

create table usuarios (
id serial primary key,
nome_loja text not null,
email text not null unique,
senha text not null ,

);