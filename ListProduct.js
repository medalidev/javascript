var products = JSON.parse(localStorage.getItem('produit')) || []
contenu = document.getElementById('elt');
// for (var i = 0; i < products.length; i++) {
//     contenu.innerHTML = contenu.innerHTML + 
//     "<tr><td>" + products[i].Np + "</td> <td>" 
//     + products[i].Desc + "</td><td>" + products[i].Prix 
//     + "</td><td>" + products[i].Qtt + "</td> </tr>"
// }

products.map((element, index) => {

    contenu.innerHTML += ` <tr><td>${element.Np}</td>
    <td>${element.Desc}</td>
    <td>${element.Prix}</td>
    <td>${element.Qtt}</td> 
    <td>${element.Ct}</td> 
    <td><button type="button" class="btn btn-success" id="${index}" onclick="loaddata(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Modifier
  </button>
    <button type="button" class="btn btn-danger" onclick="supp(${index})">supprimer</button></td></tr>`
})//les deux bouttons sont remportés de bootstrap 'live demo'


var np = document.getElementById('np');
var description = document.getElementById('description');
var prix = document.getElementById('prix');
var quantite = document.getElementById('quantite');
var categories = JSON.parse(localStorage.getItem('categorie')) || []
var c = document.getElementById('catego');

categories.map((elemt) => {//boucle for
    c.innerHTML += `<option value="${elemt.Ct}">${elemt.Ct}</option>`
})

var index = 0
function loaddata(i) {//i est égale au numéro de la case cliqué
    np.value = products[i].Np
    description.value = products[i].Desc
    prix.value = products[i].Prix
    quantite.value = products[i].Qtt
    c.value = categories[i].Ct
    index = i
}
//pour que les données de la case i cliqué seront remporter dans le model

function saveChanges() {
    var modification = {
        Np: np.value,
        Desc: description.value,
        Prix: prix.value,
        Qtt: quantite.value,
        Ct: c.value,
    }
    products.splice(index, 1, modification)

    localStorage.setItem('produit', JSON.stringify(products));
    window.location.href = '/ListProduct.html'
}//pour sauvegarder les changements effectués dans le modal


function supp(index) {
    products.splice(index, 1)
    localStorage.setItem('produit', JSON.stringify(products));
    window.location.href = '/ListProduct.html'
}

// Démarche pour la modification:
//1/ créer deux bouttons: modifier et supprimer
//2/ copier le modal de bootstrap dans la page html
//3/ copier le formulaire dans modal-body de tel façon lorsqu'on clique sur le boutton modifier le model s'affiche sous forme formulaire
//4/ pour charger le formulaire du modal de i cliqué, on a créer la fonction loaddata
//5/pour sauvegarder les changements effectués dans le modal, on a créer la fonction saveChanges
