# Objetos Definições e Dicas
**MarkDown** Praticando:  
 > - :warning: **Warning:**
 > - :memo: **Note:**
 > - :bulb: **Tip:**
## [Importação e Exportação de módulos](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)
**Módulos:** O conceito de modularidade é “esconder” detalhes de implementação das partes que compõem uma aplicação, e assim organizar e separar melhor o código. O objetivo de modularizar o código é permitir que aplicações maiores sejam montadas de forma “modular”; ou seja, através de várias partes independentes.  
&nbsp;O Node.js considera cada arquivo como um módulo separado e independente, com seu próprio namespace. Ou seja, todos os códigos definidos em um arquivo, sejam variáveis, funções ou classes, ficam restritos - ou seja, privados - e são acessados apenas pelo próprio arquivo em que foram criados, a não ser que sejam explicitamente exportados e importados em outro arquivo/módulo.  

**CJS(Common JavaScript)**  
A primeira forma adotada pelo JavaScript para permitir a modularidade foi o chamado CJS (Common JS, ou JavaScript comum), baseado na função require(). Basicamente cria as exportações a partir da alteração do objeto global exports do Node.js

**ESM(EcmaScript Modules)**  
EcmaScript Modules (ESM, em algumas documentações, de ES6 Modules), baseado nas palavras-chave import e export.
> Importante: Para utilizar o ESM em aplicações Node.js, é necessário adicionar a propriedade type: module no arquivo package.json

[export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo real para suas funções, objetos ou valores primitivos de um módulo sejam utilizados por outros programas através de declarações import. Ligações que são exportadas ainda podem ser modificadas localmente; quando importadas, embora elas possam ser lidas somente pelo módulo que as importou, seu valor é atualizado sempre que ela modificada pelo módulo que a exportou.

[import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
A declaração estática import é usada para importar vínculos que são exportados por um outro módulo. Os módulos importados estão em strict mode, declarado como tal ou não. A declaração import não pode ser usada em scripts embutidos, a menos que tal script tenha um type="module".  
Há também uma função dinâmica import(), que não requer scripts de type="module".