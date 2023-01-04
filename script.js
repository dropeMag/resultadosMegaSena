import { resultados } from "./dados.js"

// números que mais apareceram
let listaNumeros = document.getElementById('lista-numeros')

let listaJogos = document.getElementById('lista-jogos')

// lista que salva o número e a quantidades de vezes que apareceu
let lista1 = []

// lista que salva temporariamente os números sorteados
let lista2 = []

// função que coloca os números na ordem de quem apareceu mais vezes
function ordenar(a, b){
    return b.qnt - a.qnt;
}

function ordenar2(a, b){
    return a - b;
}


function gerarJogos(){
    let valor;

    for(let escolhaNum = 10; escolhaNum < 61; escolhaNum += 10){
        do {
            valor = lista1[Math.floor(Math.random() * escolhaNum)].num
        } while (lista2.includes(valor));
    
        lista2.push(valor)
    }

    lista2.sort(ordenar2)
    listaJogos.innerHTML += anotar1()
    lista2.length = 0
}






function anotar1(){
    return `<ul>
            <li>${lista2[0]}</li>
            <li>${lista2[1]}</li>
            <li>${lista2[2]}</li>
            <li>${lista2[3]}</li>
            <li>${lista2[4]}</li>
            <li>${lista2[5]}</li>
            </ul>`
}







// função que coloca no HTML o número e sua quantidade de vezes que apareceu
function anotar2(val){
    return `<li>
            <p>${lista1[val].num}</p>        
            <span>${lista1[val].qnt}x</span>
        </li>`
}

// evento principal
function eventoPrincipal(){
        // conta a frequência dos números
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
        
        for(let m = 0; m < 5; m++){
            gerarJogos()
        }

        // printa os números que mais apareceram
        for(let k = 0; k < lista1.length; k++){
            listaNumeros.innerHTML += anotar2(k)
        }
}

for(let l = 0; l < 1; l++){
    setTimeout(eventoPrincipal, 10)
}