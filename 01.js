function fibonacciCheck(numCheck) {
  let a = 0;
  let b = 1;
  let numFibo = b;
  
  for (numFibo = b; numFibo < numCheck; numFibo++) {
    numFibo = a + b;
    a = b;
    b = numFibo;
  }

  if(numFibo === numCheck) {
    console.log(`O número ${numCheck} faz parte da sequência de Fibonacci!`);
  }else {
    console.log(`O número ${numCheck} não faz parte da sequência de Fibonacci!`);
  }
}

fibonacciCheck(2);