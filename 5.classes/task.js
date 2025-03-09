class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(status) {
		if (status < 0) {
			this._state = 0;
		} else if (status > 100) {
			this._state = 100;
		} else {
			this._state = status;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let searchBook = this.books.find((book) => book[type] === value);
		return searchBook ? searchBook : null;
	}

	giveBookByName(bookName) {
		let findBook = this.findBookBy('name', bookName);
		if (findBook) {
			this.books.splice(this.books.indexOf(findBook), 1);
		}
		return findBook;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, lesson) {
		if (mark >= 2 && mark <= 5) {
			if (Object.keys(this.marks).includes(lesson)) {
				this.marks[lesson].push(mark);
			} else {
				this.marks[lesson] = [];
				this.marks[lesson].push(mark);
			}
		}
	}

	getAverageBySubject(lesson) {
		if (!Object.keys(this.marks).includes(lesson)) {
			return 0;
		} else {
			return this.marks[lesson].reduce((average, mark, index, arr) => average + mark / arr.length, 0);
		}
	}

	getAverage() {
		let lessons = Object.keys(this.marks);
		if (lessons.length === 0) {
			return 0;
		} else {
			let avrMark = 0;
			for (let lesson of lessons) {
				avrMark += this.getAverageBySubject(lesson);
			}
			return avrMark / lessons.length;
		}
	}
}