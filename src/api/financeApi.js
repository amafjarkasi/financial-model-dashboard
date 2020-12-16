import axios from 'axios';

export default axios.create({
    baseURL:'financialmodelingprep.com',
    headers:{
        Authorization:''
    }
});