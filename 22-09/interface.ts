interface ProdutoDados {
	id: number,
    nome: string,
    preco: number
}

function exibirProduto(produto: ProdutoDados): void {
    console.log(`${produto.nome} - R$ ${produto.preco}`)
}

const cafe: ProdutoDados = {
    id : 22,
    nome: "Café",
    preco: 5
}

exibirProduto(cafe)