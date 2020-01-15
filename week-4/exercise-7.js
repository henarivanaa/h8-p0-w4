function urutkanAbjad(str) {
   var strArray = []
   for (let i = 0; i < str.length; i++) {
       strArray[strArray.length] = str[i]
   }
   
   for (let i = 0; i < strArray.length; i++) {
       for (let j = 0; j < strArray.length-1-i; j++) {
           if (strArray[j] > strArray[j+1]) {
               var simpenan = strArray[j]
               strArray[j] = strArray[j+1]
               strArray[j+1] = simpenan
           }
       }
   }
   var joinedStrArray = ''
   for (let i = 0; i < strArray.length; i++) {
       joinedStrArray += strArray[i]
   }
   return joinedStrArray
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'