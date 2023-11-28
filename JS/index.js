// prendere elemento main da html
let mainContenitore = document.getElementById("js-main");
// console.log(mainContenitore);


    // creazione del contenitore dove ci saranno gli items
    let contenitoreGriglia = document.createElement("div");
    // dato a div classe contenitore
    contenitoreGriglia.classList.add("contenitore");
    // aggiunto contenitore dentro main
    mainContenitore.append(contenitoreGriglia);

for (let i = 1; i <= 100; i++) {
    // creazione degli items
   let items= document.createElement("div");
    //dato classe js-square agli items
   items.classList.add("js-square");
   //  dato numero a items  
   items.append(i)
   // messo tutti gli items dentro a contenitore griglia
   contenitoreGriglia.append(items)
}