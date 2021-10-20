import axios from 'axios'

const setAutenticationToken = token => {
    if(token){
        axios.defaults.headers.common["Authorization"] = token;

    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
}

export {setAutenticationToken}
