function letterCheck(word) {
  const nome = word;
  let j = 0;

  for (let i = 0; i < nome.length; i++) {
    if(nome[i] === 'a' || nome[i] === 'A') {
      j++;
    }
  }
  
  if(j > 0) {
    console.log(`${nome} possui a letra 'a' ou 'A' e a quantidade de 'a' ou 'A' é ${j}`);
  }else {
    console.log(`${nome} não possui a letra 'a' ou 'A'`);
  }
}

letterCheck('JavaScript');