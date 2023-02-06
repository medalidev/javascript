function addc() {
    var cate = document.getElementById('cat');
    var validc = true;
    if (cate.value == "") {
        validc = false
        cate.classList.add('is-invalid')
        cate.classList.remove('is-valid')
    } else {
        cate.classList.add('is-valid')
        cate.classList.remove('is-invalid')
    }
    if (validc) {
        var categories = JSON.parse(localStorage.getItem('categorie')) || []
        var Cates = {
            Ct: cate.value,
        }
        categories.push(Cates);
        localStorage.setItem('categorie', JSON.stringify(categories));
        window.location.href = '/ListCategory.html'
    }

}