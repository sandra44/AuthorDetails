import * as React from 'react';

interface IDate{
    dlabel: string;
    date: string;
}

export default class TodayDate extends React.Component<IDate,{}>{
    render(){
        return(
            <div className="alert alert-info">
                {this.props.dlabel} {this.props.date}
            </div>
        );
    }
}
