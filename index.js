function articlePlus(e) {
    e.target.parentNode.querySelector('#nbr').innerHTML++;
    calculTotal(1, p = e.target.parentNode.querySelector('#prix').innerHTML);
}
function articleMinus(e) {
    if (e.target.parentNode.querySelector('#nbr').innerHTML > 0) {
        e.target.parentNode.querySelector('#nbr').innerHTML--;
        calculTotal(-1, e.target.parentNode.querySelector('#prix').innerHTML);
    };
}
function calculTotal(n, p) {
    el = Number(document.getElementById('totalArticles').innerHTML);
    let totalModification = Number(el) + Number(p) * Number(n);
    document.getElementById('totalArticles').innerHTML = totalModification;
}
