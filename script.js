// Parte 1: obter os dados
function obterDados() {
    // Aqui podemos definir uma lista de números
    const numeros = [10, 20, 30, 40, 50];
    return numeros;
}

// Parte 2: calcular soma e média
function calcularSomaMedia(numeros) {
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    const media = numeros.length ? soma / numeros.length : 0;
    return { soma, media };
}

// Parte 3: exibir resultados
function exibirResultados(soma, media) {
    document.getElementById('soma').textContent = `Soma: ${soma}`;
    document.getElementById('media').textContent = `Média: ${media}`;
}

// Evento de clique no botão
document.getElementById('calcularBtn').addEventListener('click', () => {
    const numeros = obterDados();
    const { soma, media } = calcularSomaMedia(numeros);
    exibirResultados(soma, media);
});
