function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this._year = year;
  }
  
  Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this._year}.`;
  };
  
  Book.prototype.setYear = function(newYear) {
    this._year = newYear;
    console.log(`The year of publication has been updated to ${this._year}.`);
  };
  
  var myBook = new Book('The Catcher in the Rye', 'J.D. Salinger', 1951);
  console.log(myBook.getSummary());
  myBook.setYear(1952);
  console.log(myBook.getSummary());