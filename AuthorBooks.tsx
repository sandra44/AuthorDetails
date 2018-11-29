import * as React from 'react';

export default class AuthorBooks extends React.Component<any,any>{

    render(){
        return(
            <div>
                {this.props.books.map((titles:string) => <h3 className="answer" key={titles}>{titles}</h3>)}
            </div>
        )
    }
}
