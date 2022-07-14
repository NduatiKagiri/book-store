import { v4 as uuidv4 } from 'uuid';

const initialData = {
  books: [
    {
      id: uuidv4(),
      title: 'The Caucassian Chalk Circle',
      author: 'Bertrot Bretch',
    },
    {
      id: uuidv4(),
      title: 'The Devil on the Cross',
      author: 'Ngugi wa Thiongo',
    },
    {
      id: uuidv4(),
      title: 'The River and The Source',
      author: 'Margret Ogolla',
    },
    {
      id: uuidv4(),
      title: 'Son of Fate',
      author: 'John Kiriamiti',
    },
  ],
  categories: [],
};

export default initialData;
