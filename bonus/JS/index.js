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
            for (let i = 1; i <= 100; i++) {
                    let newElement = createItems(i)
                    // dato newelement classe in base a difficoltà
                    newElement.classList.add("js-square")
                    contenitoreGriglia.append(newElement)
                }
        } else if (valueSelect === "hard1") {
            for (let i = 1; i <= 81; i++) {
                let newElement = createItems(i);
                // dato newelement classe in base a difficoltà
                newElement.classList.add("js-square1")
                contenitoreGriglia.append(newElement)
           }
        } else if (valueSelect === "hard2") {
            for (let i = 1; i <= 49; i++) {
                let newElement = createItems(i);
                // dato newelement classe in base a difficoltà
                newElement.classList.add("js-square2")
                contenitoreGriglia.append(newElement);
           }
        }
})


function createItems(numero) {
    // creazione degli items
   let items= document.createElement("div");
   //  dato numero a items  
   items.append(numero);
     // funzione per aggiungere il background a items 
     eventoBgItems(items, numero);

    return items
}

// creazione di una funzione con evento
function eventoBgItems(square ,numero ) {
     // crazione evento per attivare il background a items 
    square.addEventListener("click", function () {
        square.classList.add("js-backgrounditems")
        console.log(numero);
    })
}




