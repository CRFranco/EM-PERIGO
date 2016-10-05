function parse(input){

    var numero = input.substring(0,2)
    var numeroDeZeros = input.charAt(3)
    var zeros = ''

    for(var i=0; i < parseInt(numeroDeZeros); i++){
        zeros+='0'
    }

    return parseInt(numero+zeros)
}


function survivor(input){
    // transforma o input em um numero
    var nroPessoas = parse(input)
    var pessoas = []
    // popula o vetor. Desnecessário, mas fica mais legal
    for(var i = 0; i < nroPessoas; i++){
      pessoas.push(i+1)
    }

    var posicaoAtual = 0
    var contadorMortos = 0
    var contadorPassos = 0
    //var tamanho = (pessoas.length)-1
    while(pessoas.length>1){
        // simula o comportamento de uma fila circular
        if(posicaoAtual==pessoas.length){
          posicaoAtual=0
        }
        contadorPassos++

        // contou dois passos, mata o sujeito eliminando-o do vetor
        if(contadorPassos == 2 ){
          pessoas.splice(posicaoAtual,1)
          posicaoAtual--
          contadorMortos++
          contadorPassos=0
        }
        posicaoAtual++
    }

    // exibe o resultado final
    for(i in pessoas)
      console.log(pessoas[i]+ " sobrei")

  }
