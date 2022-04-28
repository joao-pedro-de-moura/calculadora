function insert (valor){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + valor
}
function limpar(){
    var resultado = document.getElementById('resultado').innerHTML = "";
}
function apagar(){
    var resultado = document.getElementById('resultado')
  
  resultado.innerText = resultado.innerText.substring(0, resultado.innerText.length -1);
 }
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML ;
        if (resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        } 

        
}