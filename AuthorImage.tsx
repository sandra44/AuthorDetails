import * as React from 'react';

export default class AuthorImage extends React.Component<any,any>{

    image =  "";
    constructor(props:any){
        super(props);
        this.image = this.props.imageUrl;
    }
     
    render(){
        return(
                <img src= {require('../../assets/images/JKRowling.jpg')} className="authorimage" />      
        )
    }
}
