function changeMe(arr) {
    var now = 2020
    var biodata = {}
    for (var i = 0; i < arr.length; i++) {
        biodata.firstName = arr[i][0]
        biodata.lastName = arr[i][1]
        biodata.gender = arr[i][2]
        if (arr[i][3] > now || arr[i][3] === undefined) {
            biodata.age = 'Invalid Birth Year'
        } else {
            biodata.age = arr[i][3]
        }
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`)
        console.log(biodata)
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }