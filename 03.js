function somaValue() {
  const indice = 12;
  let soma = 0;
  let k = 1
  
  while (k < indice) {
    k++;
    soma = soma + k;
  }
  
  console.log(`O valor de soma é ${soma}`);
}

somaValue();