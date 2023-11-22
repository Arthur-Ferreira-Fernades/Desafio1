function somaDivisores(num) {
    var resultado = 0;
    for (i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            resultado = resultado + i;
        }
    }
    return resultado;
}

console.log(somaDivisores(10));
