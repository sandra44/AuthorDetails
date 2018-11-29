import session_obj from './storage';

class Reload{

    firstTime = () => {
        const reloading = session_obj.getVal("reloading");
        if(reloading){
            session_obj.removeVal("reloading");
        }
    }
    
    nextQue = () => {
        session_obj.setVal("reloading","true");
        session_obj.setVal("index",parseInt(session_obj.getVal("index"),10)+1);
        window.location.reload();
    }

}

const reload_obj = new Reload();
export default reload_obj;

