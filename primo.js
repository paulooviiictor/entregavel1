function primo(numero) {
    var divisores = 0;

    for (var count = 1; count <= numero; count++)
        if (numero % count == 0)
            divisores++;

    if (divisores == 2)
        console.log("O número informado é primo!");
    else
        console.log("O número informado não é primo!");
}

primo(44);