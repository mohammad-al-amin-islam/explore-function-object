function bringSIngara(taka) {
    console.log('singara kenar taka dise',taka);
    console.log('Mama Singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var broGiven = 250;
var singara = bringSIngara(broGiven);
console.log('ei nen singara ',singara,'ta');