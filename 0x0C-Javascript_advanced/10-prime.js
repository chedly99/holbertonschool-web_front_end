const countPrimeNumbers = () => {
    let x = 0;
    let count = 0
    for (let i = 2; i <= 100; i++) {
      x = 0;
      for (let k = 2; k <= i; k++) {
        if (i % k === 0 && i != k) {
          x = 1;
        }
      }
      if (x == 0) {
        count++
      }
    }
    return count;
  };
  
  const performanceCalculation = () => {
    const t0 = performance.now();
  
    let i = 0;
    while (i != 100) {
      countPrimeNumbers();
      i++;
    }
    const t1 = performance.now();
    console.log(
      `Execution time of calculating prime numbers 100 times was ${
        t1 - t0
      } milliseconds.`
    );
  };
  
  performanceCalculation();