//# JS-fonctions-a-parametres-variables

//1. Créez une fonction à paramètres variable qui retourne une chaîne de caractères contenant "Bonjour "
// + les valeurs de chaque paramètre

function salutation(pa, texte){
    pa.innerHTML = "bonjour "+texte;
}

let p1 = document.getElementById("p1");
salutation(p1, "le monde des geeks");

let p2 = document.getElementById("p2");
salutation(p2, "a tous les apprenants");

//2. Créez une fonction à paramètres variables qui retourne le calcul de la somme de tous les param!ètres de
//    type Number passés en argument.
//    - N'oubliez pas de tester si la valeur du paramètre est un entier !!!
//    - Invoquez trois fois la fonction avec un nombre différent de paramètres
//    - Affichez à chaque fois le résultat dans un div que vous créerez en JS à cet effet.

function calcul(pa, num1, num2, num3 ){
    pa.innerHTML =+ num1+num2+num3;
}
let p3 = document.getElementById("p3");
calcul(p3, 10,10,10);

let p4 = document.getElementById("p4");
calcul(p4, 10,20,30);

let p5 = document.getElementById("p5");
calcul(p5, 20,40,60);

//3. Faites exactement la même chose que le point deux, mais cette fois, retournez la valeur de la somme multipliée
//    par 11.76, ne gardez que la partie entière

function calcul1(pa,num){
    pa.innerHTML =+ parseInt(num*11.76);
}
let p6 = document.getElementById("p6");
calcul1(p6, 10);
