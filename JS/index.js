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
        // ciclo per creare items
        for (let i = 0; i < 100; i++) {
            createItems(contenitoreGriglia, i)
        }
})


function createItems(contItems ,numero) {
        // creazione degli items
       let items= document.createElement("div");
        //dato classe js-square agli items
       items.classList.add("js-square");
       //  dato numero a items  
       items.append(numero);
         // funzione per aggiungere il background a items messo funzione in questa altra funzione perchè deve prendere l'items che è dentro solo qua
         bgItems(items, numero);
       // messo tutti gli items dentro a contenitore griglia
         return contItems.append(items);
}

// creazione della funzione per aggiungere lo sfondo ad items
function bgItems(square, numeroAttuale) {
    // evento per aggiungere il bg all'items
     square.addEventListener("click", function () {
        square.classList.add("js-backgrounditems")
        return console.log(numeroAttuale);
    })
}

