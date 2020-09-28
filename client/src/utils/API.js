import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDVQf03PSmZtLZKErweH-lz7RKNwmrn-Tw";

export default {
  // Gets all books
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
