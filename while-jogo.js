let resukltadoDados ;
let lancamentos=0;

while (resultadosDados !== 6) {
    resultadoDados = Math.floor(Math.random() * 6) + 1; // Gera um número aleátorio de 1 a 6 
    lancamentos++;
        console.log('Lançamentos ${lancamneto}: Resultando do dado: $ {resultado}');
}

console.log ('Finalmente! O número 6 foi obtido após ${lancamentos}lançamentos');