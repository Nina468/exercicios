const clique = () => {
    let numero1 = parseFloat(document.getElementById)(N1).value
    let mumero2 = parseFloat(document.getElementById)(N2).value

if (isNaN (numero1) && isNaN (nummero2)){
    alert("preencha")
}
else {
    alert("calculando")
    let total= numero1*numero2;
    exibir(total);
}
}
const exibir = (total) =>{
   document.getElementById("total").innerHTML = total;
}



