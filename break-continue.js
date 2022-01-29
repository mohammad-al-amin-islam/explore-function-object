// var numbers = [14, 25, 40, 50, 60, 70, 30];

// for (var i = 0; i < numbers.length; i++) {

//     var number = numbers[i];
//     if (number > 50) {
//         continue;
//     }
//     console.log(number);
// }


var numbers = [14, 25, 40, 50, 60, 70, 30];
var i = 0;
while (i < numbers.length) {
    var number = numbers[i];
    if (number > 50) {
        i++;
        continue;
    }
    console.log(number);
    i++;

}