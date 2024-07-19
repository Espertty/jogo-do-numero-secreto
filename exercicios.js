// let titulo = document.querySelector('h1'); Exercicio 1.01
// titulo.innerHTML = 'Hora do desafio';

// function contaConsole() {
//     console.log('O botão foi clicado!'); Exercicio 2.01
// }

// function loveJs(){
//     alert('Eu amo JS!'); // Exercicio 3.01
// }

// function exibirPrompt() {
//     let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
//     alert(`Estive em ${nomeDaCidade} e lembrei de você`) Exercicio 4.01
// }

// function somaNumeros(){
//     let numero1 = prompt('Digite o primeiro número:');
//     let numero2 = prompt('Digite o segundo número:');
//     let resultado = Math.floor(numero1) + Math.floor(numero2); Exercicio 5.01
//     alert(`A soma dos dois números é: ${resultado}`);
// }

// function helloWorld() {
//     console.log('Olá mundo') Exercicio 1.02
// }
// helloWorld();

// function ola(nome){
//     // nome = prompt('Qual seu nome?')
//     console.log(`Olá, ${nome}!`) // Exercicio 2.02
// }
// ola("Gabriel");

// function numeroDobro(){
//     let numero = prompt('Digite um número:')* 2;
//     alert(`O dobro do número digitado é: ${numero}`); // Exercicio 3.02
// }

// numeroDobro();

// function calcularmedia(a,b,c){
//     return (a + b + c) / 3;
// }
// let media = calcularmedia(8,4,10);
// console.log(media); // Exercicio 4.02

// function maiorNumero(a,b){
//     return a > b ? a : b;
// }
// let maior = maiorNumero(10,5);
// console.log(maior); // Exercicio 5.02

// function multiplica(numero){
//     return numero * numero;
// }
// resultado = multiplica(2);
// console.log(resultado); // Exercicio 6.02

// function imc(peso,altura){
//     return peso / (altura * altura); // Exercicio 1.03
// }

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1; //Exercicio 2.03
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }
  
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);
 
// function converterDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);  Exercicio 3.03
//   }
  
//   // Exemplo de uso
//   let valorEmDolar = 50;
//   let valorEmReais = converterDolarParaReal(valorEmDolar);
//   console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Área da sala: ${area} metros quadrados`); Exercicio 4.03
//     console.log(`Perímetro da sala: ${perimetro} metros`);
//   }
  
//   // Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);
  

// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
  
//   // Exemplo de uso  Exercicio 5.03
//   let raio = 4; // em metros
//   calcularAreaPerimetroSalaCircular(raio);

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
//   // Exemplo de uso Exercicio 6.03
//   let numero = 7;
//   mostrarTabuada(numero);

// let listaGenerica = []; //Exercicio 1.04

// let linguagensDeProgramação = ['JavaScript','C','C++', 'Kotlin' , 'Python']; //Exercicio 2.04

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang'); Exercicio 3.04
// // Lista ao final: ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']

// nomes = ['Cállita', 'Sofia', 'Gabriel'];
// console.log(nomes[0]); // Exercicio 4.04

// nomes = ['Cállita', 'Sofia', 'Gabriel'];
// console.log(nomes[1]); // Exercicio 5.04

// nomes = ['Cállita', 'Sofia', 'Gabriel'];
// console.log(nomes[2]); // Exercicio 6.04