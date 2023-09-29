const pessoa2 = {
    nome:"pessoas",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
const usuario2 = {
    nome:"usuarios",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
const pessoaX = {
    nome:"pessoaX",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
// export default pessoa; // Funcionou
export { pessoa2, usuario2, pessoaX };// 

//========================================================================================
// exportação: arquivo 'operacoes.js'
// export function soma(num1, num2) {
// return num1 + num2;
// }
// export function multiplica(num1, num2) {
// return num1 * num2;
// }
// export function subtrai(num1, num2) {
// return num1 - num2;
// }
function soma(num1, num2) {
return num1 + num2;
}
function multiplica(num1, num2) {
return num1 * num2;
}
function subtrai(num1, num2) {
return num1 - num2;
}
export { soma, multiplica, subtrai }