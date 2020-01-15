function checkAB(num) {
    var posisiA = []
    var posisiB = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            posisiA.push(i)
        }
        if (num[i] === 'b') {
            posisiB.push(i)
        }
    }
    for (let i = 0; i < posisiA.length; i++) {
        for (let j = 0; j < posisiB.length; j++) {
            if (Math.abs(posisiA[i] - posisiB[j])-1 === 3 ) {
                return true
            } 
        }
    }
    return false
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false