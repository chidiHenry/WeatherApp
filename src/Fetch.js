

const Fetch = async (url)=>{
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

let key = 'fb2dff30ce12b64d55d47ddf1a0a6764'
let city = 'London';

const url = `http://api.weatherstack.com/current?access_key=${key}&query=${city}` 

try{
    const data = Fetch(url);
    console.log(data);
    
} catch (error) {

    console.log(error);
    
}

export default Fetch;