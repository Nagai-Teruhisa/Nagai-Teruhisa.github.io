 'use strict';

      const target = document.getElementById("target");

      target.addEventListener("click", () => {
        target.classList.toggle("circle")
        target.textContent =  "Win!"  ;
      });    

      document.getElementById("baz").addEventListener("click",function() {
        alert('ナイスショット　１回目');
        alert('ナイスショット　２回目');

      });
