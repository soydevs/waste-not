import responseDecoder from './responseDecoder';
import axios from 'axios';

export default async function requestHandler(method, endpoint, data, token="eyJhbGciOiJIUzI1NiJ9.NjFhMjQ1MmMwMDA2OGQzNGIyMTM1NWEx.GB-AiwhUnVUkqncjrWIRyvQGb-F52pP6u41ga8lP2Io") {
    var response;
    const setResponse = (res) => response = res;
    const URL = process.env.REACT_APP_BASE_URL + endpoint;
    const headers = token ? { 'Authorization': `Bearer ${token}` } : ''
        try {
            if(method === 'GET') {
                setResponse(responseDecoder(await axios.get(URL, { headers })))
            }
            else if(method === 'POST') {
                setResponse(responseDecoder(await axios.post(URL, data, { headers })))
            }
            else if(method === 'PATCH') {
                setResponse(responseDecoder(await axios.patch(URL, data, { headers })))
            }
            else if(method === 'DELETE') {
                setResponse(responseDecoder(await axios.delete(URL, { headers })))
            }
        } catch(e) {
            setResponse(responseDecoder(e.response))
        }

    return response;
}