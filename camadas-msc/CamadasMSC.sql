DROP DATABASE IF EXISTS TheLegendOfZelda;

CREATE DATABASE TheLegendOfZelda;

USE TheLegendOfZelda;

CREATE TABLE classification (
    id INT NOT NULL PRIMARY KEY auto_increment,
    races VARCHAR(10)
);

CREATE TABLE characters (
    id INT NOT NULL PRIMARY kEY auto_increment,
    name VARCHAR(30) NOT NULL,
    races_id INT NOT NULL,
    FOREIGN KEY (races_id) REFERENCES classification (id)
);


SET SQL_SAFE_UPDATES = 0;

INSERT INTO TheLegendOfZelda.classification (races) VALUES
    ('Kokiri'),
    ('Hylian'),
    ('Gerudo'),
    ('Zoras');

INSERT INTO TheLegendOfZelda.characters (name, races_id) VALUES
    ("Link", 2),
    ("Zelda", 2),
    ("Ganondorf", 3),
    ("Ruto", 4);