const countPrimeNumbers = () => {
    let count = 0;
    let x = 0;
  
    for (let i = 2; i <= 100; i++) {
      x = 0;
      for (let k = 2; k <= i; k++) {
        if (i % k === 0 && i != k) {
          x = 1;
        }
      }
      if (x == 0) {
        count++;
      }
    }
  };
  (() => {
    const t0 = performance.now();
    countPrimeNumbers();
    const t1 = performance.now();
    console.log(
      `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
    );
  })();
  