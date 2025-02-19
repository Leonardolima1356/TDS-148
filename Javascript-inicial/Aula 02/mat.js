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

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res =(m1 + m2 + m3 + m4 + m5)/5

    if(res >= 7){
        media.textContent = res
        msg.textContent = "passou!"
        msg.style.color = "green"
    }else{
        media.textContent = res
        msg.textContent = "reprovou!"
        msg.style.color = "red"
    }
}

function imc(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resPeso = document.getElementById("resPeso")
    var msgPeso = document.getElementById("msgPeso")
    var imc = peso / (altura * altura)

    if(imc >= 40){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Obesidade grau 3"
        msgPeso.style.color = "red"
    }else if(imc >= 35 && imc<= 39){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Obesidade grau 2"
        msgPeso.style.color = "orangered"
    }else if(imc >= 30 && imc<= 34.9){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Obesidade grau 1"
        msgPeso.style.color = "orangered"
    }else if(imc >= 25 && imc<= 29.9){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Sobrepeso"
        msgPeso.style.color = "orange"
    }else if(imc >= 20 && imc<= 24.9){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Normal"
        msgPeso.style.color = "green"
    }else if(imc<= 19.9){
        resPeso.textContent = imc.toFixed(1)
        msgPeso.textContent = "Abaixo do normal"
        msgPeso.style.color = "lightblue"
    }
}

function baladinha(){
    var ano = parseFloat(document.getElementById("ano").value)
    var residade = document.getElementById("residade")
    var msgi = document.getElementById("msgi")
    var entrada = 2025 - ano

    if(entrada >= 18){
        residade.textContent = entrada
        msgi.textContent = "Pode entrar."
        msgi.style.color = "green"
    }else {
        residade.textContent = entrada
        msgi.textContent = "Não pode entrar."
        msgi.style.color = "red"
    }
    console.log(typeof entrada)
}