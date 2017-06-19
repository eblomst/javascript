var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = "mongodb://Ehn:1234@ds137191.mlab.com:37191/bookstore"

function setURL(newURL) {
  url = newURL
}

function getBooks(callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)
    db.collection("books").find({}).toArray(function (err, data) {
      assert.equal(null, err)
      var books = data
      callback(books)
      db.close()
    })
    console.log("Get books from db.js");
  })
}

function addBook(book, callback) {
  console.log(book + " new book db.js")
  MongoClient.connect(url, function (err, db) {
    console.log("Connected to mongo, db.js ")
    var collection = db.collection("books")
    collection.insert(book, function (err, data) {
      assert.equal(null, err)
      callback(data)
    })
  })
}

function findBook(bookId, callback) {
  MongoClient.connect(url, function (err, db) {
    db.collection("books").findOne(bookId);
    callback(books)
    db.close;
  })
}

function deleteBook(bookId, callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)

    db.collection("books").deleteOne({ _id: bookId }, function (err, data) {
      assert.equal(null, err)
      var response = data
      callback(response)
    })
  })
}

function updateBook(book, callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)
    var options = {
      returnOriginal: false,
      upsert: true
    }

    db.collection("books").findOneAndReplace({ _id: book.id },
      { $set: { "_id": book.id, "title": book.title, "info": book.info, "moreInfo": book.moreInfo } },
      options,
      function (err, data) {
        assert.equal(null, err)
        var updatedBook = data.value
        callback(updatedBook)
      })
  })
}

var crud = {
  getBooks: getBooks,
  addBook: addBook,
  deleteBook: deleteBook,
  updateBook: updateBook,
  setURL: setURL
}

module.exports = crud