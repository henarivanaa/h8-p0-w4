function angkaPrima(angka) {
   var array = []
   for (i = 2; i < angka; i++) {
       array[array.length] = i
   }
   for (i = 0; i < array.length; i++) {
       if (angka % array[i] === 0) {
           return false
       } 
   }
   return true
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  
  // TEST CASES TAMBAHAN
  console.log(angkaPrima(5)); // true
  console.log(angkaPrima(55)); // false