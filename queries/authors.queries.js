const queries = {
    getAuthorsByEmail: `
    SELECT name ||' '|| surname AS fullname, email, image 
    FROM authors
    WHERE email=$1;`,
    getAllAuthors: `SELECT * FROM authors;`,
    createAuthor: `INSERT INTO authors(name,surname,email,image)
	VALUES ($1,$2,$3,$4);`,
    updateAuthor: `
    UPDATE authors
    SET image = $1
    WHERE email = $2;`,
    deleteAuthor: `
    DELETE FROM authors
    WHERE email =$1;`,
    deleteAllAuthors:
    `DROP TABLE authors`
}
module.exports = queries;

// el $ es un hueco, es un parámetro