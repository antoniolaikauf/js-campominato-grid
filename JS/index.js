// prendere elemento main da html
let mainContenitore = document.getElementById("js-main");
// console.log(mainContenitore);

const button = document.getElementById("js-button");
// evento per creare il div con dentro la tabella e tutti gli items
button.addEventListener("click", function () {
        // creazione del contenitore dove ci saranno gli items
        let contenitoreGriglia = document.createElement("div");
        // dato a div classe contenitore
        contenitoreGriglia.classList.add("contenitore");
        // aggiunto contenitore dentro main
        mainContenitore.append(contenitoreGriglia);

        // funzione per crare items e dargli caratteristiche
        createItems(contenitoreGriglia);
})


function createItems(contItems) {
    for (let i = 1; i <= 100; i++) {
        // creazione degli items
       let items= document.createElement("div");
        //dato classe js-square agli items
       items.classList.add("js-square");
       //  dato numero a items  
       items.append(i)
       // messo tutti gli items dentro a contenitore griglia
       contItems.append(items)
    
    
       // crazione evento per attivare il background a items 
        items.addEventListener("click", function () {
            items.classList.add("js-backgrounditems")
            console.log(i);
        })
    }
}



