const floatingInput = document.querySelector('#floatingInput');
const floatingPassword = document.querySelector('#floatingPassword');
const button = document.querySelector('#button');

const person = {
    person1: {
        'nom': 'Papa',
        'prenom': 'Yaffa',
        'password': '12345'
    },
    person2: {
        'nom': 'Jonh',
        'prenom': 'Doe',
        'password': '24682'
    }
}

const nomComplet1 = person.person1.nom + ' ' + person.person1.prenom;
const nomComplet2 = person.person2.nom + ' ' + person.person2.prenom;

const password1 = person.person1.password;
const password2 = person.person2.password;

button.addEventListener('click', (e) => {
    if (floatingInput.value.trim() === '' && floatingPassword.value.trim() === '') {
        e.preventDefault;
        alert('Remplissez le formulaire');
    } else if (floatingInput.value !== nomComplet1 && floatingInput.value !== nomComplet2) {
        e.preventDefault;
        alert('Nom Incorrect');
    } else if (floatingPassword.value !== password1 && floatingPassword.value !== password2) {
        e.preventDefault;
        alert('Passwords Incorrect');
    } else {
        alert('Bravo vous avez reussi votre connexion');
        button.href = 'page.html';
    }
})
