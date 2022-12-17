import { resultados } from "./dados.js"

// números que mais apareceram
let numMais1 = document.querySelector('#numMais1')
let numMais2 = document.querySelector('#numMais2')

// números na média
let numMedio1 = document.querySelector('#numMedio1')
let numMedio2 = document.querySelector('#numMedio2')

// números que menos apareceram
let numMenos1 = document.querySelector('#numMenos1')
let numMenos2 = document.querySelector('#numMenos2')

// botão
let btn = document.getElementById('btn')

// lista que salva o número e a quantidades de vezes que apareceu
let lista1 = []


// função que coloca os números na ordem de quem apareceu mais vezes
function ordenar(a, b){
    return b.qnt - a.qnt;
}

// função que coloca no HTML o número e sua quantidade de vezes que apareceu
function anotar(val){
    return `<td>
            <h1>${lista1[val].num}</h1>        
            <p>${lista1[val].qnt}x</p></td>`
}

// evento principal
btn.addEventListener('click', ()=>{
    // faz a contagem dos números
    for(let j = 1; j <= 60; j++){
        let cont = 0

        for(let i = 0; i < resultados.length; i++){    
            if(resultados[i] == j){
                cont++
            }
        }

        let resul = {
            num: j,
            qnt: cont
        }
    
        lista1.push(resul)
    }

    lista1.sort(ordenar)

    // printa os números que mais apareceram
    for(let k = 0; k < 10; k++){
        numMais1.innerHTML += anotar(k)
    }

    for(let k = 10; k < 20; k++){
        numMais2.innerHTML += anotar(k)
    }

    // printa os números medianos
    for(let k = 20; k < 30; k++){
        numMedio1.innerHTML += anotar(k)
    }

    for(let k = 30; k < 40; k++){
        numMedio2.innerHTML += anotar(k)
    }

    // printa os números que menos sairam
    for(let k = 40; k < 50; k++){
        numMenos1.innerHTML += anotar(k)
    }

    for(let k = 50; k < 60; k++){
        numMenos2.innerHTML += anotar(k)
    }

    // esconde o botão
    btn.classList.add('btnUsado')
})