// Função para gerar senha
function gerarSenha(tamanho, maiusc, minusc, num, simbolos) {
    const maiuscChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minuscChars = "abcdefghijklmnopqrstuvwxyz";
    const numChars = "0123456789";
    const simbolosChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

    let caracteres = "";

    if (maiusc) caracteres += maiuscChars;
    if (minusc) caracteres += minuscChars;
    if (num) caracteres += numChars;
    if (simbolos) caracteres += simbolosChars;

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção de caracteres!");
        return "";
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];
    }
    return senha;
}

// Evento do botão
document.getElementById('gerarBtn').addEventListener('click', () => {
    const tamanho = parseInt(document.getElementById('tamanhoSenha').value);
    const maiusc = document.getElementById('maiusc').checked;
    const minusc = document.getElementById('minusc').checked;
    const num = document.getElementById('num').checked;
    const simbolos = document.getElementById('simbolos').checked;

    const senha = gerarSenha(tamanho, maiusc, minusc, num, simbolos);
    document.getElementById('senhaGerada').textContent = senha || "---";
});
