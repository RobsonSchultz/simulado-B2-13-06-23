function verificarMaiorMenorMedia() {
    var valor1 = parseFloat(prompt('Digite um número'))
    var valor2 = parseFloat(prompt('Digite outro número'))
    var valor3 = parseFloat(prompt('Digite mais um número'))
    var todosOsValores = [valor1, valor2, valor3]
    var maiorValor = Math.max.apply(null, todosOsValores)
    var menorValor = Math.min.apply(null, todosOsValores)
    var mediaValor = ((valor1 + valor2 + valor3) / 3)
    console.log('O maior valor é: ' + maiorValor)
    console.log('O menor valor é: ' + menorValor)
    console.log('A média desses valores é: ' + mediaValor)
}