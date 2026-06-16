export function createGallery(images) {
  return images
    .map(
      image => `
        <li>
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </li>
      `
    )
    .join('');
}

 export function clearGallery(){
const gallery = document.querySelector('.gallery')
gallery.innerHTML = '';
}

const loader = document.querySelector('.loader')
 export function showLoader(){
loader.classList.add('.is-visible')
}

 export function hideLoader(){
loader.classList.remove('.is-visible')
}