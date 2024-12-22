/*
 * Enter your name, surname and student id number here
 */

window.addEventListener('DOMContentLoaded', (event) => { // execute the code when the initial HTML document has been completely loaded
    
	let lookup = {};

    books.forEach(book => {
        if (book.genre && !(book.genre in lookup)) { // if the genre hasn't been previously processed
			lookup[book.genre] = 1; // add a new genre to the lookup
		}
    })

	console.log(lookup); // uncomment this line if you want to see the result in the console

	// now let's sort genres for the first select element
	const genres = Object.keys(lookup).sort(); // get the list of keys in the lookup and sort it

	console.log(genres); // uncomment this line if you want to see the result in the console

	// write your code to fill the select element

	const sortBy = document.getElementById('genre-list');
	const buttons = document.getElementById('show');
	const table = document.getElementById('book-shelf');

	function createGenreSelection(genre) {
		const genreOption = document.createElement('option');
		genreOption.value = genre;
		genreOption.innerHTML = genre;

		sortBy.appendChild(genreOption);
	
		return genreOption;
	}

	for (let i = 0; i < genres.length; i++) {
		createGenreSelection(genres[i]);
	}

	console.log(books[3])

	buttons.addEventListener('click', () => {
		table.innerHTML = '';
		renderBookTable();
		
			console.log(sortBy.value)
			renderTable(sortBy.value)
		
	})

	function bookClalification(book) {
		date = new Date()
		if (book.publication_year >= 0 && book.publication_year <= date.getFullYear()) {
			if (book.author.birth_year >= 0 && (book.author.birth_year <= date.getFullYear() || book.author.birth_year === null)) {
				createBooks(book);
			}
		}
	}

	function renderTable(genre) {
		if (genre === 'all') {
			for (let i = 0; i < books.length; i++) {
				bookClalification(books[i]);
			}
		} else if (genre === 'Romance') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Fantasy') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Fiction') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Historical Fiction') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Epic Poetry') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Science Fiction') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} else if (genre === 'Thriller') {
			for (let i = 0; i < books.length; i++) {
				if (books[i].genre === genre) {
					bookClalification(books[i]);
				}
			}
		} 
	}
	
	function createBooks(book) {
		const tableBook = document.createElement('tr');
		table.appendChild(tableBook);

		const bookTitle = document.createElement('th');
		const bookAuthors = document.createElement('th');
		const bookPublishDate = document.createElement('th');
		const bookGerne = document.createElement('th');
		const bookId = document.createElement('th');
		const bookAvailable = document.createElement('th');

		bookTitle.innerHTML = book.title;
		tableBook.appendChild(bookTitle);

		bookAuthors.innerHTML = book.author;
		tableBook.appendChild(bookAuthors);

		bookPublishDate.innerHTML = book.publication_year
		tableBook.appendChild(bookPublishDate)

		bookGerne.innerHTML = book.genre
		tableBook.appendChild(bookGerne)

		bookId.innerHTML = book.isbn
		tableBook.appendChild(bookId)

		bookAvailable.innerHTML = book.available_copies
		tableBook.appendChild(bookAvailable)

		return tableBook
	}

	function renderBookTable() {
		const tableBook = document.createElement('tr');
		table.appendChild(tableBook);

		const bookTitle = document.createElement('th');
		const bookAuthors = document.createElement('th');
		const bookPublishDate = document.createElement('th');
		const bookGerne = document.createElement('th');
		const bookId = document.createElement('th');
		const bookAvailable = document.createElement('th');

		bookTitle.innerHTML = 'Title';
		tableBook.appendChild(bookTitle);

		bookAuthors.innerHTML = 'Author';
		tableBook.appendChild(bookAuthors);

		bookPublishDate.innerHTML = 'Published';
		tableBook.appendChild(bookPublishDate)

		bookGerne.innerHTML = 'Genre';
		tableBook.appendChild(bookGerne)

		bookId.innerHTML = 'ISBN';
		tableBook.appendChild(bookId)

		bookAvailable.innerHTML = 'Total copies/available copies';
		tableBook.appendChild(bookAvailable)

		return tableBook
	}

});

