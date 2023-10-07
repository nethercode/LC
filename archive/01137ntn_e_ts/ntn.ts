function ntribonacci(n) {
    if (n < 2) {
      return n;
    }
    if (n === 2) {
      return 1;
    }
    let tnMinus3 = 0;
    let tnMinus2 = 1;
    let tnMinus1 = 1;
    let tn;
    for (let i = 3; i <= n; i++) {
      tn = tnMinus3 + tnMinus2 + tnMinus1;
      tnMinus3 = tnMinus2;
      tnMinus2 = tnMinus1;
      tnMinus1 = tn;
    }
    return tn;
  }