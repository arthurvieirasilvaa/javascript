function contar() {
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')

    let res = document.getElementById('res')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    }

    else {
        
        if(txtpasso.value <= 0) {
            window.alert('Passo  inválido! Considerando PASSO 1')
            txtpasso.value = 1
        }

        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        res.innerHTML = 'Contando: <br>'
        if(inicio < fim) {
            for(let i = inicio; inicio <= fim; i += passo) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }

        else {
            for(let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}