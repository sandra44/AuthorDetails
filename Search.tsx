import * as React from 'react';

export default class Search extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            name: ""
        }
    }

    onChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.props.search.bind(this,this.state.name)} className="search form-inline">
                <div className="form-group">
                    <label style={{margin:10}}>Search  </label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                    <input style={{margin:10}} type="submit" className="btn btn-success" value="Go"/>
                </div>
            </form>

        )
    }
}
