function adicionar(valor) {
    let display = document.getElementById("display");
    display.value += valor;
}

function limpar() {
    let display = document.getElementById("display");
    display.value = "";
    mudarCorResultado(""); 
}

function apagar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calcular() {
    let display = document.getElementById("display");
    try {
        let resultado = eval(display.value);
        display.value = resultado;
        mudarCorResultado(resultado);
    } catch (error) {
        display.value = "Erro";
        mudarCorResultado("Erro"); 
    }
}

function mudarCorResultado(resultado) {
    let display = document.getElementById("display");
    if (resultado === "Erro") {
        display.style.backgroundColor = "#f9f9f9"; 
        display.style.color = "black";
    } else if (resultado > 0) {
        display.style.backgroundColor = "green";
        display.style.color = "white";
    } else if (resultado < 0) {
        display.style.backgroundColor = "red";
        display.style.color = "white";
    } else if (resultado == 0) {
        display.style.backgroundColor = "gray";
        display.style.color = "white";
    } else {
        display.style.backgroundColor = "#f9f9f9";
        display.style.color = "black";
    }
}
