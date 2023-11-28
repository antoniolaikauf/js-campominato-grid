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
        // controllo value per vedere che difficoltà ha scelto
        let valueSelect= document.getElementById("scelta-difficolta").value;
        if (valueSelect === "hard") {
            createItemsHard(contenitoreGriglia);
        }if (valueSelect === "hard1") {
            createItemsHard1(contenitoreGriglia)
        } else if (valueSelect === "hard2") {
            createItemsHard2(contenitoreGriglia)
        }

        // funzione per crare items e dargli caratteristiche
})


function createItemsHard(contItems) {
    for (let i = 1; i <= 100; i++) {
        // creazione degli items
       let items= document.createElement("div");
        //dato classe js-square agli items
       items.classList.add("js-square");
       //  dato numero a items  
       items.append(i);
       // messo tutti gli items dentro a contenitore griglia
       contItems.append(items);
        //    evento bg dei items
       eventoBgItems(items, i);
    }
}

// creazione loop con 81 items
function createItemsHard1(contItems) {
    for (let i = 1; i <= 81; i++) {
         // creazione degli items
        let items =document.createElement("div");
        //dato classe js-square agli items
        items.classList.add("js-square1") 
        //  dato numero a items  
        items.append(i);
        // messo tutti gli items dentro a contenitore griglia
        contItems.append(items);
         //    evento bg dei items
        eventoBgItems(items, i);
    }
}

// creazione loop con 49 items
function createItemsHard2(contItems) {
    for (let i = 1; i <= 49; i++) {
         // creazione degli items
        let items =document.createElement("div");
         //dato classe js-square agli items
        items.classList.add("js-square2") 
        //  dato numero a items
        items.append(i);
        // messo tutti gli items dentro a contenitore griglia
        contItems.append(items);
         //    evento bg dei items
        eventoBgItems(items, i);
    }
}

// creazione di una funzione con evento
function eventoBgItems(square ,numero ) {
     // crazione evento per attivare il background a items 
    square.addEventListener("click", function () {
        square.classList.add("js-backgrounditems")
        console.log(numero);
    })
}




