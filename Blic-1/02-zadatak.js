var s = "Javascript i nije toliko los";

var sredinaStringa = Math.floor(s.length / 2);
var prijeSredine = s.lastIndexOf(' ', sredinaStringa);
var nakonSredine = s.indexOf(' ', sredinaStringa + 1);

var prviDioStringa = s.substr(0, sredinaStringa);
var drugiDioStringa= s.substr(sredinaStringa + 1);

console.log(drugiDioStringa)