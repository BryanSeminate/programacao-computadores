
chefe()

function chefe(){
    // não mais vamos declarar variáveis usando como a palavra-chave var (escopo global)
    // a partir de agora vamos declarar usando let (escopo local da função onde é declarado)
    let vetor = [] // este vetor vai existir apenas dentro da função 
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor) // estamos passando uma referência na memoria do vetor
                    break           
            case 2: calcularMedia(vetor)
                    break
            case 3: calcularMaiorIdade(vetor)
                    break
            case 4: calcularQtde(vetor)
                    break
            case 5: calcularPercentual(vetor)
                    break
            case 6: console.log(`Obrigado por utilizar nosso programa`)
                    break
            default: console.log(`Opção inválida, tente novamente`)               
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){ // vet vai apontar para o vetor
    console.log(`Entrou na função entrada`) 
    // cria objeto
    let objeto = new Object()
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`). toUpperCase() // converte para letra maiúscula
    objeto.altura = Number(prompt(`Informe a altura`))
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe A (azuis) V (verde) C (castanho)`). toUpperCase() // converte para letra maiúscula
    // vamos inserir em vetor e não em vet
    vet.push(objeto)
    console.log(`Habitante inserido com sucesso`) 
}

function calcularMedia(vet){ // vet vai apontar para o vetor
    console.log(`Entrou na função calcular média`)
    let soma = 0 
    for(let i=0;i<vet.lenght;i++){
        if((vet[i].olhos == "C") &&(vet[i].altura > 1.60)){
            soma = soma + vet[i].idade
            qtde++
        }
    }
    console.log(`A média de idade é ${soma/qtde}`)
}

function calcularMaiorIdade(vet){ // vet vai apontar para o vetor
    console.log(`Entrou na função calcular maior idade `)
    let maiorIdade = 0 // assume que o primeiro habitante tem a maior idade
    for(let i=1;i<vet.lenght;i++){
        if((vet[i].idade > maiorIdade{ 
            maiorIdade = vet[i].idade// atualiza maior idade
        }
    }
    console.log(`A maior idade é de ${maiorIdade}`)   
}

function calcularQtde(vet){ // vet vai apontar para o vetor
    console.log(`Entrou na função calcular Qtde`)
    let qtde = 0 
    for(let i=1;i<vet.lenght;i++){
        if(((vet[i].sexo == "F") && (vet[i].idade >=20) && (vet[i].idade <=45))
        
        ((vet[i].olhos == "A") && (vet[i]. altura < 1.70))){
        qtde++
        }
    }
    console.log(`A qtde é de ${qtde}`)
}       

function calcularPercentual(vet){ // vet vai apontar para o vetor
    console.log(`Entrou na função calcular percentual`)
    let conta = 0
    for(let i=1;i<vet.lenght;i++){
        if (vet[i].sexo == "M"){
            conta++ // atualiza maior idade
        }
    }
    console.log(`O percentual de homens é ${(conta/vet.lenght)*100}`)

}