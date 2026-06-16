import {createGallery, clearGallery, showLoader,hideLoader} from './js/render-functions.js';
import {getImagesByQuery} from './js/pixabay-api.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const lightbox = new SimpleLightbox('.gallery a')

const gallery = document.querySelector(".gallery")
const form = document.querySelector(".form")
form.addEventListener('submit', e=>{
    e.preventDefault();
  const input = document.querySelector('[name="search-text"]')
  if (input.value.trim() === "") {
        return;
  } 
  const query = input.value.trim()
clearGallery()
showLoader();

getImagesByQuery(query).then(data => {const hits = data.hits;
  if(hits.length === 0 ){
    hideLoader()
    iziToast.error({
      message : 'Sorry, there are no images matching your search query. Please try again!'})
      input.value = "";
    return
    
  }else{
    hideLoader();
   const galleryArr = createGallery(hits)
   gallery.innerHTML = galleryArr
   lightbox.refresh();
   hideLoader();
   input.value = "";

  }
} ).catch(error =>{
  hideLoader()
  console.log(error)});
  



});








