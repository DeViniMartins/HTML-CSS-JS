function contar() {
  var inicio = window.document.getElementById("v1")
  var fim = window.document.getElementById("v2")
  var passo = window.document.getElementById("v3")
  var res = document.getElementById("res")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Sem Valor'
  } else {
    res.innerHTML = 'Contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    //Usando FOR para contagem crescente
    if (i < f){ 
      for(let c = i; c <= f; c += p){
        res.innerHTML +=` ${c} \u{1F449}`
      }
    //Usando WHILE para contagem decrescente
    } else {
      let c = i 
      while(c >= f){
        res.innerHTML +=` ${c} \u{1f448}`
        c = c - p;
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}