function adicionarLinha() {
    let tabela = document.getElementById("tabelaNotas");


    if (tabela.rows[tabela.rows.length - 1].cells[0].innerHTML === "Médias") {
        alert("A linha totalizadora já foi adicionada.");
        return;
    }

    let numLinhas = tabela.rows.length;
    let novaLinha = tabela.insertRow(numLinhas);

    let celulaTitulo = novaLinha.insertCell(0);
    celulaTitulo.innerHTML = "Médias";

    for (let i = 1; i <= 9; i++) {
        let soma = 0;
        let contador = 0;

        for (let j = 2; j < numLinhas; j++) {
            let valor = tabela.rows[j].cells[i].children[0].value;
            if (valor) {
                soma += parseFloat(valor);
                contador++;
            }
        }

        let media = contador > 0 ? (soma / contador).toFixed(2) : "0";
        let celulaMedia = novaLinha.insertCell(i);
        celulaMedia.innerHTML = media;
    }
}

function adicionarColuna() {
    let tabela = document.getElementById("tabelaNotas");
    let numLinhas = tabela.rows.length;


    if (tabela.rows[0].cells[tabela.rows[0].cells.length - 1].innerHTML !== "Média Total") {
        tabela.rows[0].insertCell(-1).outerHTML = "<th>Média Total</th>";
    }

    for (let i = 2; i < numLinhas; i++) {
        let soma = 0;
        let contador = 0;

        for (let j = 1; j <= 9; j++) {
            let valor = tabela.rows[i].cells[j].children[0].value;
            if (valor) {
                soma += parseFloat(valor);
                contador++;
            }
        }

        let media = contador > 0 ? (soma / contador).toFixed(2) : "0";
        let celulaMedia = tabela.rows[i].insertCell(-1);
        celulaMedia.innerHTML = media;
    }
}
