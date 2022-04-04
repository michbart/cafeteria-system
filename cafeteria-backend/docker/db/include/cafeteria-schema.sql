CREATE SCHEMA cafeteria;

ALTER SCHEMA cafeteria OWNER TO dummy;

CREATE TABLE cafeteria.user (
    id varchar(255) PRIMARY KEY,
    username varchar(255) NOT NULL,
    givenName varchar(255) NOT NULL,
    surname varchar(255) NOT NULL,
    roles JSONB,
    password varchar(255) NOT NULL,
    balance integer NOT NULL,
    mail varchar(255) NOT NULL
);

CREATE TABLE cafeteria."order" (
    id varchar(255) PRIMARY KEY,
    userId varchar(255) NOT NULL,
    mealId varchar(255) NOT NULL
);

CREATE TABLE cafeteria.meal (
    id varchar(255) PRIMARY KEY,
    name varchar(255) NOT NULL,
    nameEng varchar(255) NOT NULL,
    alergens JSONB,
    cost integer NOT NULL,
    date varchar(255) NOT NULL
);

CREATE TABLE cafeteria.auth (
    id varchar(255) PRIMARY KEY,
    userid varchar(255) NOT NULL,
    "token" varchar(255) NOT NULL,
    createdon varchar(255) NOT NULL
);