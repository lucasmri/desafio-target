function nextElements() {

  oddNumbers();

  function oddNumbers() {
    let i = 1;
    let odd = 1;
    let numOdd = [];
    while (i < 5) {
      numOdd.push(odd = odd + 2);
      i++;
    }
    
    console.log(`\nA) ${numOdd} \n`);
    twoPotentiation();
  }

  function twoPotentiation() {
    i = 0;
    let potentiation = 2;
    let numsPot = [];
    while (i < 6) {
      numsPot.push(potentiation = potentiation * 2);
      i++;
    }

    console.log(`B) ${numsPot} \n`);
    perfectSquares();
  }

  function perfectSquares() {
    i = 1
    let numSquares = []
    while (i < 8) {
      numSquares.push(i * i);
      i++;
    }

    console.log(`C) ${numSquares} \n`);
    perfectSquaresEven();
  }

  function perfectSquaresEven() {
    i = 2;
    let numEvenSquares = [];
    while (i <= 5 * 2) {
      numEvenSquares.push(i * i);
      i = i + 2;
    }

    console.log(`D) ${numEvenSquares} \n`);
    fibonacci();
  }

  function fibonacci() {
    let a = 0;
    let b = 1;
    let numFibo = b;
    let numFiboSequence = [];

    for (let i = 2; i <= 7; i++) {
      numFibo = a + b;
      a = b;
      b = numFibo;
      numFiboSequence.push(numFibo);
    }
    console.log(`E) ${numFiboSequence} \n`);
    sequenceNumbers();
  }

  function sequenceNumbers() {
    let numSequence = [2, 10, 12, 16, 17, 18, 19, 20];
    console.log(`F) ${numSequence} \n`);
  }

}

nextElements();