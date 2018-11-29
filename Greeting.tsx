import * as React from 'react';

interface IGreeting{
    glabel: string;
    name: string;
}

export default class Greeting extends React.Component<IGreeting,{}>{

    render(){
        return(
            <div className="alert alert-info alert-link">
                {this.props.glabel} {this.props.name}
            </div>
        );
    }
}
