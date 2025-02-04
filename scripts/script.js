// Écrire un programme en JavaScript qui demande à l’utilisateur de 
// saisir 5 nombres successivement et qui lui dit ensuite qui est 
// le plus grand le plus petit et la moyenne.
// Le programme affiche 
// -la somme du plus petit et du plus grand nombre 
// -puis affiche le produit des trois nombres (le plus grand le plus petit et la moyenne )

// Declaration des variables et recuperation des elements html avec le DOM 
const tab = [];
let grand = 0;
let petit = 100;
let somme = 0;
let moyenne = 0;
let produit = 0;

var content = document.querySelector('p');

for (let i = 0; i < 5; i++) {
    // Saisir 5 nombres
    /*Convertion des valeurs du tab en nombre avec Number()
        car prompt retourne des chaines */
    tab[i] = Number(prompt('Entrez un nombre : '));
    console.log(tab);

    if (tab[i] > grand) {
        grand = tab[i];
    }
    if (tab[i] < petit) {
        petit = tab[i];
    }
    // Trier les nombres en ordre croissant
    tab.sort((a, b) => a - b);

    // Trouver la moyenne
    moyenne = tab[Math.floor(tab.length / 2)];
}

// le plus grand le plus petit et la moyenne
content.innerText += 'Le plus grand nombre est : ' + grand +
    '\nLe plus petit nombre est : ' + petit +
    '\nLa moyenne nombre est : ' + moyenne;
// le plus grand dans la console
console.log('Le plus grand nombre est : ' + grand);
// le plus petit dans la console
console.log('Le plus petit nombre est : ' + petit);
// et la moyenne dans la console
console.log('La moyenne des nombres est : ' + moyenne);

// Calcule de la somme du plus petit et du plus grand nombre
somme = petit + grand;
// affichage de la somme du plus petit et du plus grand nombre
content.innerText += '\n\nLa somme du plus petit et du plus grand fait : ' + somme;
// affichage de la somme du plus petit et du plus grand nombre dans la console
console.log('La somme du plus petit et du plus grand fait : ' + somme);

// Calcul du produit des trois nombres (le plus grand le plus petit et la moyenne )
produit = grand * petit * moyenne;
// affichage le produit des trois nombres (le plus grand le plus petit et la moyenne )
content.innerText += '\n\nLe produit des trois nombres fait : ' + produit;
// affichage de la produit du plus petit et du plus grand nombre dans la console
console.log('La produit des trois nombres fait : ' + produit);