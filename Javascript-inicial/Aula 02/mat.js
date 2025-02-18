function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
    return res
}

function subtrair(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resSub")
    res.textContent = numero3 - numero4
    return resSub
}

function multiplicar(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resMul")
    res.textContent = numero5 * numero6
    return resMul
}

function dividir(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resDiv")
    res.textContent = numero7 / numero8
    return resDiv
}