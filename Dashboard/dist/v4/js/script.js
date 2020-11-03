/* Cambia el fondo según el click */
let _changeButton = function(paramThis, paramButton) {
    document.querySelector(".aside-name").innerHTML = paramThis.getAttribute('name');
    let contentAside = paramThis.parentNode.parentNode.parentNode;
    let contentAsideNodes = paramThis.parentNode.childNodes;
    contentAsideNodes[1].style.borderBottom = "0px solid white";
    contentAsideNodes[1].style.fontWeight = "lighter";
    contentAsideNodes[3].style.borderBottom = "0px solid white";
    contentAsideNodes[3].style.fontWeight = "lighter";
    contentAsideNodes[5].style.borderBottom = "0px solid white";
    contentAsideNodes[5].style.fontWeight = "lighter";
    if(paramButton == 1){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(47,161,213,0.85)";
    } else if(paramButton == 2){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(148,188,55,0.85)";    
    } else if(paramButton == 3){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(247,180,0,0.85)";
    }
};

/* TIME */
let _checkTime = function (i) { return (i < 10) ? "0" + i : i; }
let _startTime = function () {
    var today = new Date(),
        h = _checkTime(today.getHours()),
        m = _checkTime(today.getMinutes()),
        s = _checkTime(today.getSeconds());
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () { _startTime(); }, 500);
}
_startTime();
/* Fondo por defecto */
document.getElementById('DefultButton').click();