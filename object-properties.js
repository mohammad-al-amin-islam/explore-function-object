var computer = {
    name: 'hp',
    processor: 'core i5',
    price: 49500,
    storage: '1tb'
}
console.log(computer.price);

computer.price = 50000;
computer['price']=50500;


var priceIncrease = 'price';
//console.log(priceIncrease);
computer['priceIncrease'] =51000;
console.log(computer);


