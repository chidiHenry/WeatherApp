(()=>{"use strict";const c=async c=>{const t=await fetch(c);return await t.json()};try{const t=c("http://api.weatherstack.com/current?access_key=fb2dff30ce12b64d55d47ddf1a0a6764&query=London");console.log(t)}catch(c){console.log(c)}c()})();