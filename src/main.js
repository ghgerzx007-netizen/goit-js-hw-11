import {createGallery, clearGallery, showLoader,hideLoader} from './js/render-functions.js';
import {getImagesByQuery} from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form")
form.addEventListener('submit', e=>{
    e.preventDefault();

  const input = document.querySelector('[name="search-text"]')
  if (input.value.trim() === "") {
        return;
        
  } 
  const query = input.value.trim()
clearGallery()
showLoader()

getImagesByQuery(query)
  .then(data => {
    const hits = data.hits;

    if (hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });
      return;
    }

    createGallery(hits);
  })
  .catch(error => {
    iziToast.error({
      message: error.message || 'Something went wrong. Please try again.'
    });
  })
  .finally(() => {
    hideLoader();
    input.value = '';
  })
});