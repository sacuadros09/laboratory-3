(()=>{"use strict";var e;!function(e){e.images="images"}(e||(e={}));class t extends HTMLElement{static get observedAttributes(){return[e.images]}attributeChangedCallback(t,s,i){t===e.images?this.images=i?JSON.parse(i):void 0:this[t]=i,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.images){const t=document.createElement("figure");for(let e=0;e<this.images.length;e++){for(let s=0;s<this.images[e].length;s++){const s=this.images[e];for(let e=0;e<s.length;e++){const i=s[e],o=document.createElement("div");o.style.backgroundColor=0===i?"white":"black",o.style.width="10px",o.style.height="10px",t.appendChild(o)}t.appendChild(document.createElement("br"))}t.appendChild(document.createElement("br"))}null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-profile",t);const s={images:[[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,1,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,1],[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0]]]};class i extends HTMLElement{constructor(){super(),this.profiles=[],this.attachShadow({mode:"open"}),console.log(s.images),s.images.forEach((t=>{const s=document.createElement("my-profile");s.setAttribute(e.images,JSON.stringify(t)),this.profiles.push(s)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="",this.profiles.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("app-container",i)})();