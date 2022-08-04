$(function(){



  $("#pesAbaixo").on("click",function(){
    var pessoa = $(".pessoas li.collection-item");
    var nomes= new Array(5);
    for (var i = 0; i < pessoa.length; i++) {
      nomes[i]=$(pessoa[i]).text();
    }
    nomes.sort();
    for (var i = 0; i < pessoa.length; i++) {
      $(pessoa[i]).text(nomes[i]);
    }
  });

  $("#pesAcima").on("click",function(){
    var pessoa = $(".pessoas li.collection-item");
    var nomes= new Array(5);
    for (var i = 0; i < pessoa.length; i++) {
      nomes[i]=$(pessoa[i]).text();
    }
    nomes.sort();
    nomes.reverse();
    for (var i = 0; i < pessoa.length; i++) {
      $(pessoa[i]).text(nomes[i]);
    }
  });

})
//Explicação código acima
//Dentro do método click são criadas duas variáveis, uma chamada pessoa, que pega todos os elementos que tem aquela classe especificada e outra chamada nomes que cria um array de 5 elementos.
//Depos, é criado um loop do tipo for que vai fazer a variável nomes receber o conteúdo da variável pessoas dentro daquele array.
//Depois, o método sort é utilizado para ordenar os elementos da forma especificada dentro de outro laço for, colocando novamente o conteúdo da variável nomes como conteúdo da variável pessoas, porém, dessa vez, ordenado.
//No método click de baixo, é feita a mesma coisa, porém ao contrário e com outro botão. O método reverse se encarrega de inverter a ordem dos elementos dentro do array.
