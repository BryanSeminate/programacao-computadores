chefe()

function chefe(){
    var vetor = [] // declara o vetor
    exe7() // estamos passando o vetor como parâmetro - escopo global
    console.log(vetor)
    calcularMedia(vetor)

}

function exe7(){ // vet representa vetor -> o que fizermos com vet, será feito em vetor

    var numero = Number(prompt(`informe um numero`))
    do{

        // coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt(`informe outro numero, informe número negativo para encerrar`))
    }
    while (numero >= 0)


}

function calcularMedia(vet){
    var soma =0
    for(var i=0; i < vet.length;i++)
        soma = soma + vet[i]
}
console.log(`A média é ${soma/vet.length}`)