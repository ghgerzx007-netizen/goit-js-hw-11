import{S as u,a as f,i as a}from"./assets/vendor-CvMI5-Em.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=new u(".gallery a"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function m(s){const t=s.map(r=>`
        <li>
          <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" />
          </a>
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </li>
      `).join("");c.innerHTML=t,d.refresh()}function p(){c.innerHTML=""}function y(){l.classList.add("is-visible")}function h(){l.classList.remove("is-visible")}function g(s){return f.get("https://pixabay.com/api/",{params:{q:s,key:"56332607-bb747eac8cf621789c682c14a",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector('[name="search-text"]');if(t.value.trim()==="")return;const r=t.value.trim();p(),y(),g(r).then(n=>{const e=n.hits;if(e.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e)}).catch(n=>{a.error({message:n.message||"Something went wrong. Please try again."})}).finally(()=>{h(),t.value=""})});
//# sourceMappingURL=index.js.map
