function cariModus(arr) {
    
    var inputTidakBerulang = []
    for (let i = 0; i < arr.length; i++) {
        if (inputTidakBerulang.length === 0) {
            inputTidakBerulang[inputTidakBerulang.length] = arr[i]
        }
        else {
            var sama = ''
            for (let x = 0; x < inputTidakBerulang.length; x++) {
                if (inputTidakBerulang[x] === arr[i]) {
                    sama = 'ada'
                }
            }
            if (sama === '') {
                inputTidakBerulang[inputTidakBerulang.length] = arr[i]
            }
        }
    }
    if (inputTidakBerulang.length === arr.length || inputTidakBerulang.length === 1) {
        return -1
    }

    var counterTerbesarSementara = 0
    var hasil = []
    for (let i = inputTidakBerulang.length-1; i >=0; i--) {
        var counter = 0
        for (let j = 0; j < arr.length; j++) {
            if (inputTidakBerulang[i] === arr[j]) {
                counter += 1
            }
        }
        if (counter >= counterTerbesarSementara) {
            counterTerbesarSementara = 0
            counterTerbesarSementara += counter
            hasil[hasil.length] = inputTidakBerulang[i]
        }
    }
    return hasil[hasil.length-1]
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  // TEST CASES TAMBAHAN
  console.log(cariModus([5, 10, 10, 6, 5, 10, 5, 3])); // 5

  