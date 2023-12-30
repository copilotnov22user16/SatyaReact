
import axios from 'axios';

export const AxiosData = () => {
    const response = axios.get('http://localhost:3001/data');
    console.log(response);
    return response;
}
