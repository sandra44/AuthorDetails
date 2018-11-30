import * as React from 'react';
import AuthorDetails from './AuthorDetails';
import Header from './Header';
import Next from './Next';
import Search from './Search';
import Welcome from './Welcome';

interface IAuthorDetails{
    index: number
}

export default class AuthorMain extends React.Component<any,IAuthorDetails>{

    constructor(props:any){
        super(props);
        this.state = {
          index : 0 
        }
    }
    
    next = () => {
        this.setState({
            index : this.state.index === 3 ? 0 : this.state.index + 1
            })    
    }

    search = (name:any) => {
        this.props.authors.map((a:any) => {if(a.name === name){this.setState({index : this.props.authors.indexOf(a)});}});
        
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
                    <Search search={this.search} />
                </div>
                <div>
                    <AuthorDetails author={this.props.authors[this.state.index]} /> 
                </div>
                <div>
                    <Next click={this.next}/>
                </div>
            </div>
        )
    }
}
