function descobrirValores () { 
    let numeros = []; 
    
    numeros.push(Number(document.getElementById("n1").value)); 
    numeros.push(Number(document.getElementById("n2").value)); 
    numeros.push(Number(document.getElementById("n3").value)); 
    numeros.push(Number(document.getElementById("n4").value)); 
    numeros.push(Number(document.getElementById("n5").value)); 

    let maior = numeros[0]; 
    let menor = numeros[0]; 
    let soma = 0; 
    let pares = 0; 
    let impares = 0; 

    for (let i = 0; i < numeros.length; i++) { 
        let numero = numeros[i]; 
        
        soma = soma + numero; 

        if (numero > maior) { 
            maior = numero; 
        } 
        
        if (numero < menor) { 
            menor = numero; 
        } 

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    document.getElementById("validacao").innerHTML = 
        "Maior numero: " + maior + "<br>" +
        "Menor numero: " + menor + "<br>" +
        "Soma dos numeros: " + soma + "<br>" +
        "Quantidade de pares: " + pares + "<br>" +
        "Quantidade de impares: " + impares;
}

document.querySelector("button").addEventListener("click", descobrirValores);
