class StorageSession{

    getVal = (name:any,alt?:any) =>{
       if(alt) {return sessionStorage.getItem(name) || alt;}
       else {return sessionStorage.getItem(name) ;}

    }

    setVal = (name:any,value:any) => {
        sessionStorage.setItem(name, value);
    }

    removeVal = (name:any) => {
        sessionStorage.removeItem(name);
    }
}

const session_obj = new StorageSession();

export default session_obj;
