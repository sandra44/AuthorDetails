import session_obj from './storage';

class Refresh{
    
    nextQue = () => {
       session_obj.setVal("reloading","true");
        window.location.reload();
        return true;
    }
    
    app = () => {
        const reloading =session_obj.getVal("reloading");
        if(reloading){
           session_obj.removeVal("reloading");
        }
    }
}

const refresh_obj = new Refresh();

export default refresh_obj;
