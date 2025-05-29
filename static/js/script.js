
function calcular(){
    res = document.getElementById('res')
    inicio = document.getElementById('inicio').value
    juros = document.getElementById('juros').value
    aporte = document.getElementById('aporte').value
    tempo = document.getElementById('itempo').value
    tempo_periodo = document.getElementById('tempo').value
    inicio = Number(inicio)
    juros = Number(juros)
    aporte = Number(aporte)
    tempo = Number(tempo)
    res.innerHTML = `${inicio}`
    if (tempo_periodo == "Anos"){
        resultado = (inicio + juros/100)**tempo
        res.innerHTML = `${resultado}`
    }
}