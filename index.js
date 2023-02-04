function articlePlus(e) {
    e.target.closest('.article').querySelector('.nbr').innerHTML++;
    calculTotal(1, p = e.target.closest('.article').querySelector('.prix').innerHTML);
}
function articleMinus(e) {
    if (e.target.closest('.article').querySelector('.nbr').innerHTML > 0) {
        e.target.closest('.article').querySelector('.nbr').innerHTML--;
        calculTotal(-1, e.target.closest('.article').querySelector('.prix').innerHTML);
    };
}
function calculTotal(n, p) {
    el = Number(document.getElementById('totalArticles').innerHTML);
    let totalModification = Number(el) + Number(p) * Number(n);
    document.getElementById('totalArticles').innerHTML = totalModification;
}
function articleDelete(e){
    e.target.closest('.article').remove();
}
function modifierCouleur(e){
    e.target.closest('.article').style.backgroundColor  = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}
