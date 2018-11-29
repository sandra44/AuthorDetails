import * as React from 'react';
import 'src/assets/bootstrap.min.css';
import './Author.css';
import Greeting from './Greeting';
import TodayDate from './TodayDate';


interface IWelcome{
    name: string;
    date: string;
    glabel: string;
    dlabel: string;
}

export default class Welcome extends React.Component<{},IWelcome>{
    constructor(props:any){
        super(props);

        const today = new Date();

        this.state = {
            name: "Tim",
            date: today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            glabel: "Welcome",
            dlabel: "Date"
        }
    }

    render(){
        return(
            <div className="labels">
                <Greeting name={this.state.name} glabel={this.state.glabel} />
                <TodayDate date={this.state.date} dlabel={this.state.dlabel} />
            </div>
        )
    }

}
