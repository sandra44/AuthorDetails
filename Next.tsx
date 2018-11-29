import * as React from 'react';
import reload_obj from '../../services/reload';


export default class Next extends React.Component{

    
    render(){
        return(
            <button className="btn btn-primary btn-lg button" onClick={reload_obj.nextQue}>Next</button>
        )
    }
}
