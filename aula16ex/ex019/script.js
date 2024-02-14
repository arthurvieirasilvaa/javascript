let txtnum = document.getElementById('txtnum')
let flista = document.getElementById('flista')
let res = document.querySelector('div#res')
let arr = []

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    }

    return false
}

function inLista(num, arr) {
    if(arr.indexOf(Number(num)) != -1) {
        return true
    }

    return false
}

function adicionar() {
    if(isNumero(txtnum.value) && !inLista(txtnum.value, arr)) {
        let num = Number(txtnum.value)
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado.`
        item.value = `${num}`
        
        flista.appendChild(item)
        arr.push(num)
        res.innerHTML = ''
    }

    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    txtnum.value = ''
    txtnum.focus()
}

function maiorValor() {
    let maior = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

    return maior
}

function menorValor() {
    let menor = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < menor) {
            menor = arr[i]
        }
    }

    return menor
}

function somar() {
    let soma = 0
    for(let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }

    return soma
}

function finalizar() {
    if(arr.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }

    else {
        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${arr.length} números cadastrados.</p>`
    
        let maior = maiorValor()
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        
        let menor = menorValor()
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        let soma = somar()
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${soma / arr.length}.</p>`
    }
}