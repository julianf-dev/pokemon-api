const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};h();document.querySelector(".cards-container");const a=document.querySelector(".cards-container"),b=document.querySelector("#search"),y=document.querySelector("#generate-pokemon");const w="https://pokeapi.co/api/v2",p=`${w}/pokemon`,s=async e=>{try{return await(await fetch(e)).json()}catch(t){console.log(t)}},l=({property:e,nameProperty:t})=>{const o=document.createElement("div"),r=document.createElement("span");r.className="pokemon-info-detail",r.textContent=e;const n=document.createElement("p");return n.textContent=t,o.append(r,n),o};function m(e){const t=[],o=document.createElement("article");o.classList.add("card-pokemon");const r=document.createElement("h2");r.textContent=e.name.toUpperCase();const n=document.createElement("img");n.src=e.sprites.other.dream_world.front_default,n.alt=e.name;const i=document.createElement("div");i.className="pokemon-info";const d=l({property:e.height,nameProperty:"Height"}),u=l({property:e.abilities[0].ability.name,nameProperty:"Ability"}),x=l({property:e.types[0].type.name,nameProperty:"Type"});return i.append(d,u,x),o.append(n,r,i),t.push(o),a.append(...t),a}async function g(){try{(await s(`${p}/?limit=20`)).results.map(o=>{v(o.url)})}catch(e){console.log(e)}}async function v(e){try{const t=await s(e);m(t)}catch(t){console.log(t)}}const k=async e=>{try{if(a.innerHTML=" ",!e==" "){const t=await s(`${p}/${e.toLowerCase()}`);m(t)}else g()}catch(t){console.log(t)}},_=e=>{a.classList.add("search-container");const t=document.createElement("div");t.classList.add("buttons");const o=document.createElement("button");o.classList.add("button"),o.textContent="Previous",o.setAttribute("id","button-left");const r=document.createElement("button");return r.classList.add("button"),r.textContent="Next",r.setAttribute("id","button-right"),t.append(o,r),a.insertAdjacentElement("beforeend",t),t.addEventListener("click",n=>{n.target.id=="button-left"&&(e.id==1&&(e.id=201),f(e.id-1)),n.target.id=="button-right"&&(e.id===200&&(e.id=0),f(e.id+1))}),a};let c;const f=async e=>{try{const t=Math.round(Math.random()*200);e?c=await s(`${p}/${e}`):(c=await s(`${p}/${t}`),console.log(c.id)),a.innerHTML=" ",m(c),_(c)}catch(t){console.log(t)}};b.addEventListener("change",e=>{const t=e.target.value;k(t)});y.addEventListener("click",()=>{f()});document.addEventListener("DOMContentLoaded",g);