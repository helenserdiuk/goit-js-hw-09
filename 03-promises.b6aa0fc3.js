!function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();var t=e.elements[0].value,i=e.elements[1].value,a=e.elements[2].value;t-=i;for(var c=1;c<=a;c+=1){n(c,t+c*i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.b6aa0fc3.js.map