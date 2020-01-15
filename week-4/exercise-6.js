function digitPerkalianMinimum(angka) {
    var faktor = []
    for (let i = 1; i <=angka; i++) {
        var faktorInString = ''
        if (angka%i === 0){
            faktorInString += i
            faktorInString += angka/i
            faktor[faktor.length] = faktorInString
            
        } 
    }
    
    var lowestDigit = faktor[0].length
    for (let i = 0; i < faktor.length; i++) {
        if (faktor[i].length < lowestDigit) {
            lowestDigit = 0
            lowestDigit += faktor[i].length
        }
    }
    return lowestDigit
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

  // TEST CASES TAMBAHAN
  console.log(digitPerkalianMinimum(28)); // 2
  console.log(digitPerkalianMinimum(2884)); // 4

  // 128,214,47,74,142,281