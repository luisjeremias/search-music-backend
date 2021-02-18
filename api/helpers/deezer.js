const axios = require('axios');
const URL = "https://api.deezer.com/search";

class Deezer {
    get(query,count){
      return axios.get(URL,{
        params:{
          q:query,
          limit:count
        }
      })
    }
}
module.exports = Deezer;