function contar() {
  let inicio = document.getElementById("txtstart");
  let fim = document.getElementById("txtend");
  let passo = document.getElementById("txtpass");
  let res = document.getElementById("res");

  if (
    Number(inicio.value) == 0 ||
    Number(fim.value) == 0 ||
    Number(passo.value) == 0
  ) {
    res.innerHTML = "Impossível contar! Por  favor, digite um número!";
  } else {
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

   if (i < f) {
      for(var c = 1; i <= f; c += p ){
        res.innerHTML = `{c}`
      }
    }
    else{

    }
  }
}

