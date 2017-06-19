import React from "react"
import { Link } from "react-router"
import { observer } from "mobx-react"
@observer
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    // Behøves ikke da vi bruger mobX
    //this.props.route.bookStore.subscribe(this);
    //This will read books from the server each time user navigates to
    //The product page (a simple way to ensure "updated data")
    this.props.route.bookStore.fetchBooks();
  }

  // Behøves ikke da vi bruger mobX
  /*
  dataReady = () =>{
    this.forceUpdate();
  }*/


  render() {
    const books = this.props.route.bookStore.books;
    const bookStore = this.props.route.bookStore;
    return (
      <div>
        <h3>All our great books </h3>
        <ul>
          {books.map((book) => <li key={book._id}>
            {book.title} <Link to={`products/details/${book._id}`}> details </Link>
            <button onClick={() => bookStore.deleteBook(book._id)} > Remove </button></li>)}
        </ul>
      </div>

    )
  } 
}
