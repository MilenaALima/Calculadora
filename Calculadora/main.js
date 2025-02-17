function adicionar(valor) {
    document.getElementById('display').value += valor;
}

function limpar() {
    document.getElementById('display').value = '';
}

function apagar() {
    let display = document.getElementById('display'); //pegando o elemento digitado no display para ser manipulado em seguida
    display.value = display.value.slice(0, -1); //remove o ultimo caractere
}

function calcular() {
    let expressao = document.getElementById('display').value;
    if(validarExpressao(expressao)){
        let resultado = calcularExpressao(expressao);
        document.getElementById('display').value = resultado;
    } else {
        alert('Cálculo inválido!');
    }
}

function validarExpressao(expressao){
    // Verifica se a expressão contém apenas números, operadores e pontos
    return /^[0-9+\-*/().\s]*$/.test(expressao);
}

function calcularExpressao(expressao){
    // Substitui os operadores por seus respectivos símbolos JavaScript
    try {
        return new Function('return ' + expressao)();
    } catch (e) {
        return 'Erro';
    }
}

function criarSimbolos() {
    const container = document.getElementById('simbolos-container');
    const simbolos = ['+', '-', '×', '÷']; // Símbolos matemáticos
    const quantidade = 20; // Número de símbolos

    for (let i = 0; i < quantidade; i++) {
        const simbolo = document.createElement('div');
        simbolo.classList.add('simbolo');
        simbolo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

        // Posição aleatória
        simbolo.style.top = Math.random() * 90 + 'vh';
        simbolo.style.left = Math.random() * 90 + 'vw';

        // Tamanho aleatório
        const tamanho = Math.random() * 3 + 1; // Entre 1rem e 4rem
        simbolo.style.fontSize = `${tamanho}rem`;

        // Opacidade aleatória
        simbolo.style.opacity = Math.random() * 0.5 + 0.1; // Entre 0.1 e 0.6

        container.appendChild(simbolo);
    }
}

// Executa a função quando a página carrega
criarSimbolos();