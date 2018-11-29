import * as React from 'react';
import reload_obj from '../../services/reload';
import AuthorDetails from './AuthorDetails';
import Header from './Header';
import Next from './Next';
import Search from './Search';
import Welcome from './Welcome';

interface IAuthorDetails{
    name: string;
    imageSource: string;
    imageUrl: string;
    books: string[];
}

export default class AuthorMain extends React.Component<any,IAuthorDetails>{

    next = (e:any) => {
        e.preventDefault();
        console.log(this.props.author);
        reload_obj.nextQue();
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="jumbotron col-8 offset-1">
                        <Header />
                    </div>
                    <div className="col-3">
                        <Welcome />
                    </div>
                </div>
                <div>
                    <Search />
                </div>
                <div>
                    <AuthorDetails author={this.props.author} imageUrl={this.props.author.imageUrl}/>
                </div>
                <div>
                    <Next/>
                </div>
            </div>
            
        )
    }
}
