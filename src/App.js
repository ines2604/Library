import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BooksCard from './components/BookCard';

function App() {
  const [booksList, setBooksList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  function fetchBooks() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=library&maxResults=36`)
      .then((response) => response.json())
      .then((data) => {
        const books = data.items;
        setBooksList(books);
        setFilteredBooks(books);
        
        const newCategories = new Set([]);
        books.forEach(book => {
          if (book.volumeInfo.categories) {
            book.volumeInfo.categories.forEach(category => newCategories.add(category));
          }
        });

        setCategories(Array.from(newCategories));
      })
      .catch((error) => console.error('Error fetching books:', error));
  }

  function filtrer(cat) {
    if (cat === 'All') {
      setFilteredBooks(booksList);
    } else {
      setFilteredBooks(booksList.filter(newItem =>
        newItem.volumeInfo.categories && newItem.volumeInfo.categories.includes(cat)
      ));
    }
  }

  function search(e) {
    e.preventDefault();
    const searchInput = document.getElementById('searchBook').value.toLowerCase();
    const searchedBooks = [];
  
    booksList.forEach((item) => {
      if (item.volumeInfo.title.toLowerCase().includes(searchInput)) {
        searchedBooks.push(item);
      }
    });
  
    setFilteredBooks(searchedBooks);
    console.log(filteredBooks)
  }
  

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <NavBar fonction={filtrer} categories={categories} search={search}/>
      <div className="container mt-4">
        <div className="row g-4">
          {filteredBooks.length>0 && (filteredBooks.map((bookItem) => (
            <div className="col-2" key={bookItem.id}>
              <BooksCard bookItem={bookItem} />
            </div>
          )))
        }
        </div>
      </div>
    </div>
  );
}

export default App;
