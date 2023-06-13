function verificarMaiorNumero() {
    var valor1 = prompt('Digite um número');
    var valor2 = prompt('Digite outro número');
    var valor3 = prompt('Digite mais um número');
    var todosOsValores = [valor1, valor2, valor3];
    var maiorValor = Math.max.apply(null, todosOsValores);
    console.log(maiorValor)
}