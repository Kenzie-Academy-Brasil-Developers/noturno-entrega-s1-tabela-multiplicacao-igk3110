function tabelaDeMultiplicacao(valor) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let tabela = [] ;

    for (let index = 0; index <= valor; index ++) {
        tabela.push([])
        for(let subIndex = 0; subIndex <= valor; subIndex++){
            tabela[index][subIndex] = index*subIndex
        }

        

    }console.table(tabela)
        
}
return tabelaDeMultiplicacao(16)