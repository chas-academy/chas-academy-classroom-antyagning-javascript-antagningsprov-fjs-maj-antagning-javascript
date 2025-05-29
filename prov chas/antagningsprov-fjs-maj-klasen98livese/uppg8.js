

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let personer = [

  { name: "Jakob", age: 27 },
  { name: "Per", age: 56 },
  { name: "Lovisa", age: 25 },
  { name: "Erik", age: 31 },
  { name: "Linn", age: 33 }
  ];

  function skrivUtPersonerOver30(lista) {
    for(let i = 0; i < lista.length; i++) {
        if (lista[i].age > 30) {
            console.log(lista[i].name);
            }
            }

}
skrivUtPersonerOver30(personer);

}
uppg8();

module.exports = { uppg8 };