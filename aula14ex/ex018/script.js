function tabuada() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if(txtnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }

    else {
        let num = Number(txtnum.value)
        tab.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text += `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}
