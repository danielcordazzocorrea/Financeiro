
function calcular(){
    res = document.getElementById('res')
    inicio = document.getElementById('inicio').value
    juros = document.getElementById('juros').value
    aporte = document.getElementById('aporte').value
    tempo = document.getElementById('itempo').value
    tempo_periodo = document.getElementById('tempo').value
    inicio = Number(inicio)
    juros = Number(juros)/100
    aporte = Number(aporte)
    tempo = Number(tempo)
    if (tempo_periodo == "Anos"){
        tempo *= 12
        juros = (1 + juros)**(1/12) -1
        resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
        res.innerHTML = `R$ ${resultado.toFixed(2)}`

    }else{
        resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
        res.innerHTML = `R$ ${resultado.toFixed(2)}`
    }
}