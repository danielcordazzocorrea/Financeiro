
function calcular(){
    elementos = document.getElementsByClassName('formatacao')
    res = document.getElementById('res')
    valor_inicio = document.getElementById('valor_investido')
    inicio = document.getElementById('inicio').value
    juros = document.getElementById('juros').value
    aporte = document.getElementById('aporte').value
    tempo = document.getElementById('itempo').value
    tempo_periodo = document.getElementById('tempo').value
    tempo_periodo_juros = document.getElementById('tempo_j').value
    valor_ganho = document.getElementById('valor_ganho')
    inicio = Number(inicio)
    juros = Number(juros)/100
    aporte = Number(aporte)
    tempo = Number(tempo)
    elementos[0].style.display = 'block'
    if (tempo == 0 || juros == 0 || inicio == 0){
        res.innerHTML = 'Coloque um valor válido'
    }else{
        if (tempo_periodo == "Anos"){
            tempo *= 12
            if(tempo_periodo_juros == "Anual"){
                juros = (1 + juros)**(1/12) -1
                resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
                ganho = resultado - inicio
                resultado = resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
                res.innerHTML = `R$ ${resultado}`
            }else{
                resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
                ganho = resultado - inicio
                resultado = resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
                res.innerHTML = `R$ ${resultado}`
            }

        }else{
            if (tempo_periodo_juros == "Mensal"){
                resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
                ganho = resultado - inicio
                resultado = resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
                res.innerHTML = `R$ ${resultado}`
            }else{
                juros = (1 + juros)**(1/12) -1
                resultado = inicio * (1 + juros)**tempo + aporte * (((1 + juros)**tempo -1)/ juros)
                ganho = resultado - inicio
                resultado = resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
                res.innerHTML = `R$ ${resultado}`
            }
        }
        elementos[1].style.display = 'block'
        elementos[2].style.display = 'block'
        valor_inicio.innerHTML = `R$${inicio.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
        valor_ganho.innerHTML = `R$${ganho.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
    }
}