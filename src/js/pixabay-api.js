 import axios from 'axios';
 export function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/",{
    params:{q:query, key:"56332607-bb747eac8cf621789c682c14a", image_type: "photo", orientation: "horizontal", safesearch: true },}).then(res => res.data);
}