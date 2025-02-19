function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
}

function subtrair(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resSub")
    res.innerHTML = numero3 - numero4
}

function multiplicar(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resMul")
    res.innerHTML = numero5 * numero6
}

function dividir(){
    document.getElementById("n8").style.border = "1px solid grey"
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resDiv")
    if(numero8 !== 0){
        res.innerHTML = numero7 / numero8.toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0."
        document.getElementById("n8").style.border = "2px solid red"
    }
}