import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:2000/api/`                  //direct call
// baseURL: `http://localhost:8765/micromultiplex/api/`  //api- gateway
});