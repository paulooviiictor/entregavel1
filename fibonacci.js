function fibonacci(termo) {
    var penultimo = 0, ultimo = 1;
    var numero;
    let sequencia = []

    if (termo <= 2)
        numero = termo - 1;
    else
        for (var count = 3; count <= termo; count++) {
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
            sequencia.push(numero)
        }
    
    console.log(sequencia);
}

fibonacci(10);