var categories = JSON.parse(localStorage.getItem('categorie')) || []
contenue = document.getElementById('ctg');
categories.map((elemt, ind) => {

    contenue.innerHTML += ` <tr><td>${elemt.Ct}</td>
    <td><button type="button" class="btn btn-success" id="${ind}" onclick="loaddata(${ind})" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Modifier
  </button>
    <button type="button" class="btn btn-danger" onclick="supp(${ind})">supprimer</button></td></tr>`
})
var categ = document.getElementById('categ');


var ind = 0
function loaddata(i) {
    categ.value = categories[i].Ct
    ind = i
}

function saveChanges() {
    var modification = {
        Ct: categ.value
    }
    categories.splice(ind, 1, modification)

    localStorage.setItem('categorie', JSON.stringify(categories));
    window.location.href = '/ListCategory.html'
}

function supp(ind) {
    categories.splice(ind, 1)
    localStorage.setItem('categorie', JSON.stringify(categories));
    window.location.href = '/ListCategory.html'
}