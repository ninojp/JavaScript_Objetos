import chalk from "chalk";

// Criar um objeto, a partir de um modelo(protótipo)
// Vou criar uma função construtura, para criar o modelo
console.log(chalk.blue('Criar um objeto, um modelo(protótipo)'));
function Anime(titulo, subtitulo, lancamento, episodios, duracao, nota){
    this.titulo=titulo;
    this.subtitulo=subtitulo;
    this.lancamento=lancamento;
    this.episodios=episodios;
    this.duracao=duracao;
    this.nota=nota;
    this.darNota=function (maisNota){
    this.nota += maisNota;
    }
}
// Aqui eu estou instânciando um objeto apartir do protótipo
// Que herda todas as caracteristicas do objeto protótipo
const onePunchMan = new Anime('One Punch Man', 'OPM', '2015-12-20', 12, '00:22:00', 80);
// console.log(Anime)
console.log(onePunchMan);
//----------------------------------------------------------------------------------------

// Agora para criar novo Modelo, que herde as propriedades anteriores e mais as suas novas
console.log(chalk.blue('Criar novo Modelo, que herde as propriedades anteriores'));
function AnimeSerie(titulo, subtitulo, lancamento, finalizado, episodios, duracao, temporadas, nota){
    Anime.call(this, titulo, subtitulo, lancamento, episodios, duracao, nota);
    this.finalizado = finalizado;
    this.temporadas = temporadas;
}
const onePunchManSerie = new AnimeSerie("One Punch Man 2nd Season", "One Punch Man Season 2",
"9 de abril de 2019", "3 de julho de 2019", 12, "23 Minutos", "1 Temporada", 90);
console.log(onePunchManSerie);
//----------------------------------------------------------------------------------------

// Aqui estamos adicionando uma método(função) ao novo objeto
// através da propriedade prototype que acessamos o protótipo de um objeto para manipulá-lo,
//podendo adicionar propriedades e funções. Novos objetos criados herdarão essas
//características e comportamentos diretos do protótipo.
console.log(chalk.blue('adicionando uma método(função) ao novo objeto'));
AnimeSerie.prototype.diminuirNota = function (menosNota) {
    this.nota -= menosNota;
}
onePunchManSerie.diminuirNota(30);
console.log(onePunchManSerie);
//===============================================================================

// Propriedades enumeráveis
// Além do nome e do valor, cada propriedade tem também três atributos:
// Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
// Enumerable: Define se a propriedade é retornada, por exemplo, 
//em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries().
// Ou seja, se a propriedade é enumerável;
// Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
console.log(chalk.blue('Propriedades enumeráveis'));
//Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo;
const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
   ]}
console.log(Object.getOwnPropertyDescriptor(catalogo, "catalogo"))
//------------------------------------------------------------------------------------------

//objetos criados com new a partir de um construtor herdam a propriedade 
//prototype de sua função construtora; Objetos criados com Object.create()
//recebem como prototype o primeiro parâmetro da função - que pode ser null.
console.log(chalk.blue('Propriedades enumeráveis, objetos criados com new a partir de um construtor'));
console.log(Object.getOwnPropertyDescriptor(onePunchManSerie, "finalizado"))
//------------------------------------------------------------------------------------------

//Então podemos testar algumas propriedades e validar a ideia de cadeia
console.log(chalk.blue('Podemos testar algumas propriedades e validar a ideia de cadeia'))
console.log(onePunchMan.hasOwnProperty("nota"))
console.log(onePunchManSerie.hasOwnProperty("nota"))
console.log(onePunchMan instanceof Anime)
console.log(typeof onePunchMan)
console.log(typeof onePunchManSerie)
console.log(onePunchManSerie instanceof AnimeSerie)
console.log(Function.prototype.isPrototypeOf(Anime))
console.log(Anime.constructor === Function)
//============================================================================================

// Nessa aula, você aprendeu:
// Que no Javascript o protótipo representa um objeto “modelo” com seus métodos,
//utilizado como base para a criação de outros objetos;
// Como acessar propriedades de protótipo através de __proto__ e da propriedade prototype;
// Como a herança de protótipo é utilizada para a criação de dados primitivos,
//arrays e objetos com JavaScript;
// Como criar objetos utilizando funções construtoras;
// Como utilizar a herança para criação de novos objetos com a propriedade prototype.
