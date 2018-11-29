import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router} from 'react-router-dom';
import AuthorMain from './components/AuthorQuiz/AuthorMain';
import history from './services/history';
import reload_obj from './services/reload';
import session_obj from './services/storage';

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

const searchAuthor = () => {
  let auth = {}
  authors.map((a:any) => {if(a.name === session_obj.getVal("search_name")){auth = a;}});
  return auth;
}

const app = () => {
  reload_obj.firstTime();
  return <AuthorMain author={search()} />;
}

const search = () => {
  let author = {};
  author = session_obj.getVal("search") ? searchAuthor() : getAuthor();
  console.log(author);
  session_obj.removeVal("search");
  return author;
}

const getAuthor = () => {
  if(!session_obj.getVal("index")){
    session_obj.setVal("index",'0');
  }
  else if(parseInt(session_obj.getVal("index"),10) > 3){
    session_obj.setVal("index",'0');
  }
  const ind = parseInt(session_obj.getVal("index"),10);
 // console.log(session_obj.getVal("index"));
  return authors[ind];
}

ReactDOM.render(<Router history={history}>
  <React.Fragment>
      <Route exact={true} path="/" component={app} />
      </React.Fragment>
</Router>,document.getElementById('root') as HTMLElement);
