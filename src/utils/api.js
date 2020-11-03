import axios from 'axios';

export default axios.create({
  baseURL:'http://my-json-server.typicode.com/maja1997/trelloDB',
  responseType: "json"
})
