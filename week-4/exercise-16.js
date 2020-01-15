function graduates (students) {
    // Code disini
    // SAYA ADA DUA JAWABAN TOLONG DI REVIEW YA BANG YG BAIK YG MANA
    // var result = {}
    // for (var i = 0; i < students.length; i++) {
    //     var same = false
    //     var temp = []
    //     var obj = {}
    //     for (var key in result) {
    //         if (key === students[i].class && students[i].score > 75) {
    //             same = true
    //             obj.name = students[i].name
    //             obj.score = students[i].score
    //             result[key].push(obj)
    //         }
    //     }
    //     if (!same && students[i].score > 75) {
    //         obj.name = students[i].name
    //         obj.score = students[i].score
    //         temp.push(obj)
    //         result[students[i].class] = temp
    //     }
        
    // }
    // return result
    var result = {}
    for (var i = 0; i < students.length; i++) {
        var temp = []
        for (var j = 0; j < students.length; j++) {
            var obj = {}
            if (students[i].class === students[j].class && students[j].score > 75) {
                obj.name = students[j].name
                obj.score = students[j].score
                temp.push(obj)
            }
            
        }
        result[students[i].class] = temp
    }
    return result
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}