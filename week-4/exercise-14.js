function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = []
    var ongkos = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var jarak = []
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                jarak.push(j)
            } else if (arrPenumpang[i][2] === rute[j]) {
                jarak.push(j)
            }
        }
        ongkos.push( (jarak[1]-jarak[0]) * 2000 )
    }
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        obj.bayar = ongkos[i]
        result.push(obj)
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]