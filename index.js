import{a as l,S as u,i as f}from"./assets/vendor-b6X63ke0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();function d(o){return o.map(e=>`
        <li>
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </li>
      `).join("")}function m(){const o=document.querySelector(".gallery");o.innerHTML=""}const c=document.querySelector(".loader");function p(){c.classList.add(".is-visible")}function n(){c.classList.remove(".is-visible")}function y(o){return l.get("https://pixabay.com/api/",{params:{q:o,key:"56332607-bb747eac8cf621789c682c14a",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const h=new u(".gallery a"),g=document.querySelector(".gallery"),L=document.querySelector(".form");L.addEventListener("submit",o=>{o.preventDefault();const e=document.querySelector('[name="search-text"]');if(e.value.trim()==="")return;const i=e.value.trim();m(),p(),y(i).then(s=>{const r=s.hits;if(r.length===0){n(),f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.value="";return}else{n();const t=d(r);g.innerHTML=t,h.refresh(),n(),e.value=""}}).catch(s=>{n(),console.log(s)})});
//# sourceMappingURL=index.js.map
