--Poner aquí todas las queries de prueba y todas las que queramos usar

--esta query llama los datos cuando yo le paso un email
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;


--esta query me va a dar todas las entries que tenga en mi bbdd
SELECT * FROM entries;

--crear una nueva entry
INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)

--esta me da toda la info de todos los autores
SELECT * FROM authors;

--esta me da el nombre, el mail y la imagen del autor cuyo email coincida con el que yo he puesto en localhost
SELECT name ||' '|| surname AS fullname, email, image 
FROM authors
WHERE email=$1;

--esto añade cosas a authors
INSERT INTO authors(name,surname,email,image)
	VALUES ($1,$2,$3,$4);


--update de info de author
UPDATE authors
SET image = $1
WHERE email = $2;


--update titulo de entry
UPDATE entries
SET title = $1
WHERE title =$2;



--delete entry by title
DELETE FROM entries
WHERE title =$1;


--delete autor by email
DELETE FROM authors
WHERE email =$1;

--eliminar toda la tabla
DROP TABLE $1