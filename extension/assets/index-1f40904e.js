(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(s){const o=/(https?:\/\/[^/]+)/;if(!s)return"/";const n=s.match(o);return n?n[1]:null}const c=document.getElementById("wrap"),a="<img class='logo' src='./ff.svg' alt='firefox' />",u=`<input class='search' placeholder='Search' name="q" />`;async function f(){var n;let o=(n=(await browser.bookmarks.getTree())[0].children)==null?void 0:n.filter(r=>r.id==="toolbar_____")[0].children;return`
    <ul class='bookmarks'>
      ${o==null?void 0:o.map(r=>`<li><a href='${r.url}'>
            <img src='${l(r.url)}/favicon.ico' alt=' ' />
            ${r.title.length>20?r.title.slice(0,20)+"...":r.title}</a></li>`).join("")}
    </ul>
    `}async function d(){const s=await f();c&&(c.innerHTML=`
  ${s??""}
  <div class='input_wrap'>
  <div class='logo_wrap'>${a}<span>Firefox</span></div>
  <form method='get' action='https://www.google.com/search'>
  ${u}
  </form>
  </div>
  `)}d();
