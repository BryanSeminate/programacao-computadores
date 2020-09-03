chefe()

function chefe(){

    // escopo local
    let vendedores = []
    do{
        let opcao = Number(prompt(`Escolha [1]. Cadastrar vendedor [2]. Cadastrar venda [3]. sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedore) // essa passagem é por referência e torna o vetor de escopo global
                  break
            case 2:
                  break
            case 3: console.log(`Tchau`)
            default: console.log(`Tente novamente ...`)            

        }
    }
    while (opcao != 3)
}

function cadastraVendedor(vended){ // vended representa o vetor de vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código do vendedor`))
    objeto.nome = prompt(`Infome nome do vendedor`)
    // verifica se o código ja existe
    for(let i = 0; i <vended.lenght;i++){
        if (vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois já existe um vendedor com esse código`)
            return 0 // sai da função pois não iremos cadastrar
        }
    }
    // insere no vended, mas na verdade insere no vetor de vendedores
    vended.push(objeto)

} 

function cadastraVendas(vdas, vdes) { // vdas representa o vetor vendas e vdes representa o vetor de vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe valor da venda`))
    // verifica se o vendedor existe
    //percorre o vetor de vendedores
    for(let i = 0; i <vended.lenght;i++){
        if (vended[i].codigo == vdes[i].codigo){ // achamos o vendedor
            // verifica se existe venda para esse vendedor no mesmo mês - não podemos registrar
            //percorre o vetor de vendas
            for(let j=0; j <vdas.lenght;i++)
            if ((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                console.log(`Não podemos registrar a venda`)
                return 0 // sai da função
            }
        }
        // já percorreu e não achou, então vamos inserir
        // insere a venda em vdas, que na verdade é vendas
        vdas.push(objeto)
        console.log(`Venda registrada`)
        return 0 // sai da função 
    }
    console.log(`Vendedor não existe`)
    
}
