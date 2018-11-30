import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AuthorMain from './components/AuthorQuiz/AuthorMain';

const authors = [
  {
      name: 'Mark Twain',
      imageUrl: '../../assets/images/MarkTwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing It'] 
  },
  {
      name: 'J K Rowling',
      imageUrl: '../../assets/images/JKRowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone', 'Harry Potter and Prisoner of Askaban'] 
  },
  { 
      name: 'Stephen King',
      imageUrl: '../../assets/images/StephenKing.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'It'] 
  },
  {
      name: 'William Shakespeare',
      imageUrl: '../../assets/images/WilliamShakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet'] 
  }
] 

ReactDOM.render(<AuthorMain authors={authors} />,document.getElementById('root') as HTMLElement);
