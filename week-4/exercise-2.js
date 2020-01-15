function fpb(angka1, angka2) {
    var pembagi1 = []
    var pembagi2 = []
    for (let i = 1; i < angka1; i++) {
        if (angka1%i === 0) {
            pembagi1[pembagi1.length] = i
        }
    }
    
    for (let i = 1; i < angka2; i++) {
        if( angka2 % i === 0) {
            pembagi2[pembagi2.length] = i
        }
    }
    
    var pembagiSatuDanDua = []
    for (let i = 0; i < pembagi1.length; i++) {
        for (let j = 0; j < pembagi2.length; j++) {
            if (pembagi1[i] === pembagi2[j]) {
                pembagiSatuDanDua[pembagiSatuDanDua.length] = pembagi1[i]
            }
        }
    }
    return pembagiSatuDanDua[pembagiSatuDanDua.length-1]
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1