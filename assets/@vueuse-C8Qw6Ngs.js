import{r as d,i as m,w as y,g as v,o as S,u as w}from"./@vue-Cw3NGFVp.js";function s(e){return v()?(S(e),!0):!1}function b(e){return typeof e=="function"?e():w(e)}const r=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function h(e,n=1e3,l={}){const{immediate:c=!0,immediateCallback:p=!1}=l;let t=null;const o=d(!1);function f(){t&&(clearInterval(t),t=null)}function a(){o.value=!1,f()}function i(){const u=b(n);u<=0||(o.value=!0,p&&e(),f(),t=setInterval(e,u))}if(c&&r&&i(),m(n)||typeof n=="function"){const u=y(n,()=>{o.value&&r&&i()});s(u)}return s(a),{isActive:o,pause:a,resume:i}}export{h as u};