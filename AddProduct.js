function addp() {
    var np = document.getElementById('np');
    var validf = true;
    if (np.value == "") {
        validf = false
        np.classList.add('is-invalid')
        np.classList.remove('is-valid')
    } else {
        np.classList.add('is-valid')
        np.classList.remove('is-invalid')
    }

    var description = document.getElementById('description');
    if (description.value == "") {
        validf = false
        description.classList.add('is-invalid')
        description.classList.remove('is-valid')
    } else {
        description.classList.add('is-valid')
        description.classList.remove('is-invalid')
    }

    var prix = document.getElementById('prix');
    if (prix.value == "") {
        validf = false
        prix.classList.add('is-invalid')
        prix.classList.remove('is-valid')
    } else {
        prix.classList.add('is-valid')
        prix.classList.remove('is-invalid')
    }

    var quantite = document.getElementById('quantite');
    if (quantite.value == "") {
        validf = false
        quantite.classList.add('is-invalid')
        quantite.classList.remove('is-valid')
    } else {
        quantite.classList.add('is-valid')
        quantite.classList.remove('is-invalid')
    }
    var c = document.getElementById("catego");
    if (validf) {
        var products = JSON.parse(localStorage.getItem('produit')) || []
        var Prod = {
            Np: np.value,
            Desc: description.value,
            Prix: prix.value,
            Qtt: quantite.value,
            Ct: c.value
        }
        products.push(Prod);
        localStorage.setItem('produit', JSON.stringify(products));
        window.location.href = '/ListProduct.html'
    }

}
var c = document.getElementById("catego");//site: stack overflow
var categories = JSON.parse(localStorage.getItem('categorie')) || []
categories.map((elemt)=>{

    c.innerHTML+=`<option value="${elemt.Ct}">${elemt.Ct}</option>`


})