const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const texthacked = document.getElementById("texthacked");

const texthack = () => {
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    texthacked.innerText = texthacked.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return texthacked.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= texthacked.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1/4;

  }, 35);
  if(document.getElementById("texthacked").getAttributeNode("data-value").value == "developer"){
    document.getElementById("texthacked").setAttribute("data-value","designer");
    document.getElementById("texthacked").innerText = "designer";
  }
  else{
    document.getElementById("texthacked").setAttribute("data-value","developer");
    document.getElementById("texthacked").innerText = "developer";
  }
}

setInterval(() => {
    texthack(); 
}, 3000);