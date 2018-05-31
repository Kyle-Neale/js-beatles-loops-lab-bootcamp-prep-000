function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var artist = musicians[i];
    var instrument = instruments[i];
    newArr.push(`${artist} plays ${instrument}`);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0
  while(i < facts.length) {
    var fact = facts[i];
    facts[i] = fact + '!!!'
    i++
  }
  return facts;
}

function iLoveTheBeatles() {
  
}