!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function s(e,t,n,s=!1){const a=document.getElementById("tabs"),i=document.createElement("button");i.classList.add("tab"),s&&i.classList.add("selected"),i.setAttribute("tabindex",e),i.textContent=t,i.addEventListener("click",n),a.appendChild(i)}function a(e,t,n,s){const a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("div"),c=document.createElement("h2"),o=document.createElement("p");return a.classList.add("menu-card"),a.classList.add(s),i.classList.add("menu-image"),i.setAttribute("src",e),i.setAttribute("alt","breakfast picture"),r.classList.add("menu-info"),c.textContent=t,o.textContent=n,r.append(c,o),a.append(i,r),a}function i(){const e=document.getElementById("menu-display"),[t]=document.getElementsByClassName("selected");let n=[];switch(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(e),t.getAttribute("tabIndex")){case"1":n=function(){const e=[];return e.push({img:"../src/imgs/breakfast1.jpg",title:"Eggs",desc:"Delicious eggs to start the morning"}),e.push({img:"../src/imgs/breakfast2.jpg",title:"Granola",desc:"Healthy granola to give you all the vitamins and minerals"}),e.push({img:"../src/imgs/breakfast3.jpg",title:"Pancakes",desc:"Tasty pancakes with fruit for those cheat days"}),e}();break;case"2":n=function(){const e=[];return e.push({img:"../src/imgs/lunch1.jpg",title:"Chicken",desc:"Grilled chicken with no added fat"}),e.push({img:"../src/imgs/lunch2.jpg",title:"Pasta",desc:"Tasty pasta alfredo with parmesan cheese"}),e.push({img:"../src/imgs/lunch3.jpg",title:"Beef",desc:"Juicy beef with potatoes and vegetables"}),e}();break;case"3":n=function(){const e=[];return e.push({img:"../src/imgs/dinner1.jpg",title:"Salmon",desc:"Imported salmon with a bed of stir vegetables"}),e.push({img:"../src/imgs/dinner2.jpg",title:"Salad",desc:"If you eat this for dinner you will be hungry by midnight"}),e}();break;case"4":n=function(){const e=[];return e.push({img:"../src/imgs/contact.jpg",title:"Reach us",desc:"Make your order online or by phone"}),e}()}!function(e,t){const n=[];for(let t=0;t<e.length;t+=1){const{img:s,title:i,desc:r}=e[t];let c="";c=t%2==0?"left":"right",n.push(a(s,i,r,c))}t.append(...n)}(n,e)}function r(e){let t=document.getElementsByClassName("selected");[t]=t,t.classList.remove("selected"),e.target.classList.toggle("selected"),i()}n.r(t),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),s=document.createElement("p");t.classList.add("banner"),n.classList.add("banner-title"),n.textContent="Welcome to Chunks",s.classList.add("description"),s.textContent="The best restaurant in the area, where you can find fresh and healthy food",e.append(t,s),t.appendChild(n)}(),s(1,"Breakfast",r,!0),s(2,"Lunch",r),s(3,"Dinner",r),s(4,"Contact Us",r),i()}]);