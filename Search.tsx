import * as React from 'react';
import session_obj from '../../services/storage';

export default class Search extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            name: ""
        }
    }

    setSearch = () => {
        session_obj.setVal("search",'1');
        session_obj.setVal("search_name",this.state.name);
        window.location.reload();
    }

    onChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.setSearch} className="search form-inline">
                <div className="form-group">
                    <label style={{margin:10}}>Search  </label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                    <input style={{margin:10}} type="submit" className="btn btn-success" value="Go"/>
                </div>
            </form>

        )
    }
}
