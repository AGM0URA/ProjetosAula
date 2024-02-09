const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const btncalcular = document.querySelector('#btncalcular')
const resultado = document.querySelector('#resultado')

btncalcular.addEventListener('click',()=>{
    let altura1 = Number(altura.value)
    let peso1 = Number(peso.value)
    let imc = ""
    
    imc = peso1 / (altura1 * altura1)
   
    resultado.innerHTML=("SEU IMC É: "+imc.toFixed(2))

    if(imc <= 16.9){
        estado.innerHTML=("Muito abaixo do peso")
    }
    else if(imc >=17 && imc <=18.4){
        estado.innerHTML=("abaixo do peso")
    }
    else if(imc >=18,5 && imc <=24.9){
        estado.innerHTML=("peso normal")
    }
    else if(imc >=25 && imc <=29.9){
        estado.innerHTML=("acima do peso ")
    }
    else if(imc >=30 && imc <=34.9){
        estado.innerHTML=("oboesidade grau I")
    }
    else if(imc >=35 && imc <=40){
        estado.innerHTML=("oboesidade grau II")
    }
    else if(imc >40){
        estado.innerHTML=("oboesidade grau III")
    }

})

