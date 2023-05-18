function conta10(){
let conta = 1
let media
let x = 0
let soma = 0
let quantidade = Number(prompt('informe a quantidade'))
while (conta <= 10){
    let idade = Number(prompt('informe idade: ' + conta))
    x = idade + x
   
    conta = conta + 1
}
    media = x / quantidade
    console.log("media = " + media)
}
function conta10(){
    let idade = Number(prompt('informe idade: '))

}
function conta10(){
let cont = 0
let n
let res

n = Number (prompt("Digite um número"))
while(cont = 10){

}
}

function exe4(){
   let f1 = 0
   let f2 = 0
   let f3 = 0
   let f4 = 0
   let f5 = 0
   let pf1
   let pf5
   let idade
   let cont = 1
   
   while (cont <= 8){
    idade= Number(prompt("Informe didade" + cont ))
    if ((idade >= 0) && (idade <= 15)){
        f1++
    }
    else if ((idade >= 16) && (idade <= 30)){
        f2++
    }
    else if ((idade >= 31) && (idade <= 45)){
        f3++
   }
    else if ((idade >= 46) && (idade < 60)){
        f4++
    }
    else if ((idade >= 60)){
        f5++
    }
    else {
        alert ("Idade negativa")
    }
    cont++
   }
   pf1 = (f1 / 8) * 100
   pf5 = (f5 / 8) * 100
   alert ('f1: ' + f1 + 'f2: ' + f2 + 'f3: ' + f3 + 'f4: ' + f4 + 'f5: ' + f5)
   alert ('%f1: ' + pf1 + " %f5: " + pf5)
}


function exe0(){
let a
let b
let c
let d
let aux

a = Number(prompt("coloque a: "))
b = Number(prompt("coloque b: "))
c = Number(prompt("coloque c: "))
d = Number(prompt("coloque d: "))

let conta = 1

while (conta <=3 ) {
    conta = conta + 1
    if (a > 5) {
        aux = a; a = b; b = aux}
    if (b > c){
        aux = b; b = c; c = aux}
    if (c > d) {
        aux = c; c = d; d = aux}
    }
    alert ("Crescente :" + a ,"," + b, "," + c, "," + d)
    alert ("Decrescente:" + d, "," + c, "," + b, "," + a)
}

function exe2(){
    let preco = 5
    let qntd = 120
    const despesa = 200
    let saida = "<table border = '1'> <tr> <th> Preço </th> <th> Qndtd </th> <th> Despesa </> <th> Lucro </th></tr>"
    while (preco >= 1){
        let lucro = (preco*qntd) - despesa
        saida = saida + '<tr><td> $(preco) </>td <td> $(qntd) </td> <td> $(despesa) </td> <td> $(lucro) </td></tr>'
        preco = preco -0.5
        qntd = qntd - 26
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe7(){
    let idade, altura, peso;
    let idade50 = 0; let somaAltura = 0
    let contaAltura = 0; let peso40 = 0;
    for (let conta = 1; conta <= 5; conta ++){
        idade = Number(prompt("Informe a idade"))
        altura = Number(prompt("Informe a altura"))
        peso = Number(prompt("Informe o peso"))
            if(idade > 50){
                idade50 ++
            }
            else if ((idade >= 0) && (idade <= 20)){
                somaAltura = somaAltura + altura
                contaAltura ++
            }
            if (peso < 40){
                peso40 ++
            }

    }
    alert ("idade >50" + idade50)
    alert ("Média altura com 10 <= idade <= 20" + somaAltura/contaAltura)
    alert ("Porcentagem de pessoas com peso inferior a 40= "+ ((peso40/5)*100) )
}

function exe20(){
    let opcao, nota1, nota2, nota3, peso1, peso2, peso3
    do {
        opcao = Number(prompt("Menu de opções  \n 1.Média aritimédica \n 2.Média ponderada \n 3.Sair"))
        switch (opcao){
            case 1:
            nota1=Number(prompt("informe nota 1:"));
            nota2=Number(prompt("Informe nota 2:"));
            alert (`Média aritimética ${(nota1 + nota2) / 2}`); break

            case 2: 
            nota1 = Number(prompt("Informe a nota 1: "))
            peso1 = Number(prompt("Informe o peso da nota 1: "))

            nota2 = Number(prompt("Informe a nota 2: "))
            peso2 = Number(prompt("Informe o peso da nota 2: "))

            nota3 = Number(prompt("Informe a nota 3: "))
            peso3 = Number (prompt("Informe o peso da nota 3: "))

            alert ("A média ponderada é: " + (((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / ((peso1 + peso2 + peso3)))); break 
            case 3: alert ("Programa encerrado"); break
            default: alert ("opção invalida"); break

        
        }
    }
while (opcao != 3)
}