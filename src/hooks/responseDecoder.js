export default function responseDecoder(response) {
    
    var message, success = false, data;
    
    const setSuccess = (s) => success = s;
    const setMessage = (msg) => message = msg;
    const setData = (d) => data = d;
    
    if(response?.status === 500) 
        setMessage("Servers temporarily down! Please try again later")
    else if(response?.status === 400) 
        setMessage("Bad Request!")
    else if(response?.status === 304)
        setMessage("Not modified!")
    else if(response?.status === 201) {
        setMessage("Successful!")
        setSuccess(true)
        setData(response.data)
    }
    else if(response?.status === 200) {
        setMessage("Success!")
        setSuccess(true)
        setData(response.data)
    }
    return { success, message, data }
}
