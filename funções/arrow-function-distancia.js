//Aroow function para calcular a distâcia entre dois pontos no jogo
 const calcularDistancia = (x1, y1, x2, y2) => {
    const distanciaX= x2 - x1;
    const distanciaY = y2 - y1;
    return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
 };

 // Chamndo a função para calcular a distãncia entre dois pontos
 const resultado = calcularQuadrado(5);
console.log("Quadrado de 5: ", resultado);