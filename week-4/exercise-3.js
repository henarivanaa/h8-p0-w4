function cariMedian(arr) {
    var hasil = 0
    if (arr.length%2 === 0) {
        for (let i = arr.length/2; i < (arr.length/2)+2; i++) {
            hasil += arr[i-1]/2
        }
    } else if (arr.length%2 !== 0) {
        hasil += arr[(arr.length-1)/2]
    }
    return hasil
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  // TEST CASES TAMBAHAN
  console.log(cariMedian([7, 7, 8, 8, 5, 3, 7, 9, 2])); // 5