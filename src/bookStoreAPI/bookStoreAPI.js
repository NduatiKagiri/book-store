const STORE_ID = 'HEWklbCNH05i2Il2v7zL';
const STORE_BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const STORE_PATH = `${STORE_BASE}/apps/${STORE_ID}/books`;

const addBookToStore = async (book) => {
  const response = await fetch(STORE_PATH, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const removeBookFromStore = async (book) => {
  const response = await fetch(`${STORE_PATH}/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const getStateFromStore = async () => {
  const response = await fetch(STORE_PATH);
  const data = await response.json();
  const idsArray = Object.keys(data).map((item) => ({
    item_id: item,
  }));
  const booksArray = Object.values(data);
  const booksObject = idsArray.map((item, id) => {
    const book = booksArray[id];
    const { title, author, category } = book[0];
    return ({
      ...item,
      title,
      author,
      category,
    });
  });

  const categories = new Set();

  booksObject.forEach((book) => {
    categories.add(book.category);
  });

  const initialState = {
    books: booksObject,
    categories,
  };
  return initialState;
};

export { addBookToStore, removeBookFromStore, getStateFromStore };
