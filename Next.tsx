import * as React from 'react';

interface INext {
    click() : void;
}

export default class Next extends React.Component<INext,{}>{

    render(){
        return(
            <button className="btn btn-primary btn-lg button" onClick={this.props.click}>Next</button>
        )
    }
}
