import * as React from 'react';
import 'src/assets/bootstrap.min.css';
import './Author.css';
import AuthorBooks from './AuthorBooks';
import AuthorImage from './AuthorImage';


export default class AuthorDetails extends React.Component<any,any>{

    render(){
        return(
            <div className="row  options">
                <div className="col-4 offset-1">
                    <AuthorImage imageUrl={this.props.author.imageUrl} /> 
                </div>
                <div className="col-6">
                   <AuthorBooks books={this.props.author.books}/> 
                </div>
            </div>
        )
    }
}
